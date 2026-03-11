from pathlib import Path
from streamlit.components.v1 import declare_component
from streamlit_elements_fluence import version

if version.__release__:
    ELEMENTS_FRONTEND = {"path": (Path(version.__file__).parent/"frontend/build").resolve()}
else:
    ELEMENTS_FRONTEND = {"url": "http://localhost:3001"}

_component = declare_component("streamlit_elements", **ELEMENTS_FRONTEND)

def render_component(js, key, default="{}", on_change=None, license="no license"):
    return _component(js=js, key=key, default=default, on_change=on_change, license=license)
