from pathlib import Path
from streamlit.components.v1 import declare_component
from streamlit_elements import version

if version.__release__:
    ELEMENTS_FRONTEND = {"path": (Path(version.__file__).parent/"frontend/build").resolve()}
else:
    ELEMENTS_FRONTEND = {"url": "http://localhost:3001"}

# Custom component declaration that supports on_change callbacks (Streamlit 1.36+)
def render_component(js, key, default="{}", on_change=None):
    """Render streamlit-elements component with optional callback support.
    
    This function uses Streamlit's official on_change parameter support
    introduced in version 1.36.0 to handle callbacks.
    
    Args:
        js: JavaScript code to execute
        key: Unique key for the component
        default: Default value if no value is set
        on_change: Optional callback function to call when component value changes
    
    Returns:
        The component's current value
    """
    # Declare the component
    _render_component = declare_component("streamlit_elements", **ELEMENTS_FRONTEND)
    
    # Call the component with official on_change support
    return _render_component(
        js=js,
        key=key,
        default=default,
        on_change=on_change  # This is the official Streamlit 1.36+ parameter
    )

# Keep the original function name for backwards compatibility
# but it now uses the new implementation
_original_render_component = declare_component("streamlit_elements", **ELEMENTS_FRONTEND)