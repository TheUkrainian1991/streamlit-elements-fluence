import inspect
import json
import re

from streamlit import session_state
from typing import Callable

CALLBACK_KEY = f"{__name__}.elements_callback_manager"
FRONTEND_ERROR_KEY = f"{__name__}.elements_frontend_error"
FORBIDDEN_PARAM_CHAR_RE = re.compile(r"\W+")

# NOTE: This code has been updated to work with Streamlit 1.36+ 
# which officially supports on_change callbacks for custom components.
# No patching required anymore!

class ElementsCallbackManager:
    __slots__ = ("_callbacks", "_key", "_frontend_error_key")

    def __init__(self, key):
        self._callbacks = {}
        self._key = key
        self._frontend_error_key = f"{FRONTEND_ERROR_KEY}.{key}"

        # Initialize callbacks store.
        if CALLBACK_KEY not in session_state:
            session_state[CALLBACK_KEY] = {}

        # Register a callback for a given element_key.
        session_state[CALLBACK_KEY][key] = self

    def consume_frontend_error(self):
        return session_state.pop(self._frontend_error_key, None)

    def register(self, callback):
        if isinstance(callback, Callable):
            callback = ElementsCallback(callback)

        # Callback IDs are composed of the frame's key and their index
        # in the callbacks dictionary. The index is padded make sure
        # every callback ID has the same length. This is used to order
        # for call ordering.
        callback_id = f"{self._key}{len(self._callbacks):08}"
        self._callbacks[callback_id] = callback.callback
        callback.serialize(callback_id)

        return callback

    def dispatch(self):
        # This is the callback function that gets called by Streamlit's
        # official on_change mechanism (Streamlit 1.36+)
        
        # Get the widget data from session state
        widget_data = session_state.get(self._key, "{}")
        
        try:
            # Parse the JSON data from the frontend
            frontend_data = json.loads(widget_data, object_hook=lambda d: ElementsCallbackData(d))
        except (json.JSONDecodeError, TypeError):
            # If we can't parse it, assume it's not callback data
            return

        if isinstance(frontend_data, dict) and "error" in frontend_data:
            session_state[self._frontend_error_key] = _normalize_frontend_error(frontend_data["error"])
            return

        # Handle the case where frontend_data is not a dict (single value)
        if not isinstance(frontend_data, dict):
            return

        # Sort data by key to make sure callbacks are called in order.
        frontend_data = {k: v for k, v in sorted(frontend_data.items()) if isinstance(v, dict)}

        for callback_id, frontend_params in frontend_data.items():
            if callback_id in self._callbacks:
                callback = self._callbacks[callback_id]

                # If callback expect a parameter not defined in params, pass None by default.
                # This will be the case for any param name that starts with an underscore.
                undefined_params = (
                    param
                    for param in _get_parameters(callback)
                    if param not in frontend_params.keys()
                )

                for param in undefined_params:
                    frontend_params[param] = None

                callback(**frontend_params)


class ElementsCallback:
    __slots__ = ("_callback", "_serialized", "_lazy", "_params")

    def __init__(self, callback, params=None):
        self._callback = callback
        self._serialized = "()=>{}"
        self._lazy = False

        if params is not None:
            self._params = params
        else:
            # If no params specified, get them from callback's signature
            self._params = _get_parameters(callback)

        # Make sure params don't contain forbidden characters.
        self._params = tuple(FORBIDDEN_PARAM_CHAR_RE.sub("", key) for key in self._params)

    @property
    def callback(self):
        return self._callback

    def lazy(self):
        self._lazy = True

    def serialize(self, callback_id):
        params = ",".join(self._params)
        data = f"{json.dumps(callback_id)}:{{{params}}}"

        if self._lazy:
            # When widget changes, store data in state.
            self._serialized = f"({params})=>{{window.lazyData={{...window.lazyData,{data}}};}}"
        else:
            # When widget changes, send data and lazy data to Streamlit.
            # Lazy data is cleared once sent.
            self._serialized = f"({params})=>{{send({{...window.lazyData,{data}}});window.lazyData={{}};}}"

    def __repr__(self):
        return self._serialized


class ElementsCallbackData(dict):
    __slots__ = ()

    def __getattr__(self, value):
        try: 
            return self.__getitem__(value)
        except KeyError as error:
            raise AttributeError(f"{value} is not a valid attribute") from error


def _normalize_frontend_error(error):
    if isinstance(error, dict):
        return {
            "source": str(error.get("source", "frontend")),
            "name": str(error.get("name", "Error")),
            "message": str(error.get("message", "Unknown frontend error")),
            "stack": None if error.get("stack") is None else str(error["stack"]),
        }

    return {
        "source": "frontend",
        "name": "Error",
        "message": str(error),
        "stack": None,
    }


def format_frontend_error(frame_key, error_data):
    if not isinstance(error_data, dict):
        return f"In elements frame '{frame_key}': {error_data}"

    source = error_data.get("source", "frontend")
    name = error_data.get("name", "Error")
    message = error_data.get("message", "Unknown frontend error")
    stack = error_data.get("stack")

    formatted = f"In elements frame '{frame_key}' ({source}) {name}: {message}"
    if stack:
        formatted = f"{formatted}\nFrontend stack:\n{stack}"

    return formatted


def _get_parameters(function):
    return (
        name
        for name, parameter in inspect.signature(function).parameters.items()
        if parameter.kind == parameter.POSITIONAL_OR_KEYWORD
    )
