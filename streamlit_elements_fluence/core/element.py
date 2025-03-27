import json


class Element:
    __slots__ = ("_frame", "_module", "_element", "_props", "_children", "_on_change")

    def __init__(self, frame, module, element):
        self._frame = frame
        self._module = json.dumps(module)
        self._element = json.dumps(element)
        self._props = ""
        self._children = ""
        self._on_change = None  # new slot for on_change callback

    def __enter__(self):
        self._frame.capture_children()

    def __exit__(self, *_):
        self._frame.save_children(self)

    def __call__(self, *children, **props):
        self._frame.register_element(self)

        # Extract the on_change callback, if provided.
        on_change = props.pop("on_change", None) or props.pop("onClick", None)
        if on_change is not None:
            self._on_change = on_change
            # Optionally, you might register the callback with your frame,
            # e.g. self._frame.register_callback(self, on_change)
            # or serialize it as part of the props if your frontend expects it.
            # For the new API, you can often pass on_change directly,
            # so this might be handled outside of this serialization.

        # Serialize and stringify props and children.
        # Leading underscores in prop keys are stripped to allow passing props
        # that are also Python keywords:
        # e.g. mui.collapse(in_=True)
        self._props += ",".join(
            json.dumps(key.rstrip("_")) + ":" + self._frame.serialize(value)
            for key, value in props.items()
        )
        self._children += ",".join(
            self._frame.serialize(child)
            for child in children
        )

        return self

    def __repr__(self):
        # You could include the on_change callback as part of the serialization,
        # if needed for your frontend; otherwise, leave it out.
        return f"render({self._module},{self._element},{{{self._props}}},[{self._children}])"
