"""
Minimal test app to debug iframe height and click alignment.
Run with: streamlit run tests/apps/debug_height_app.py
"""
import streamlit as st
from streamlit_elements_fluence import elements, mui

st.set_page_config(layout="wide")
st.title("Debug: Button Click Alignment")

st.write("Try clicking each button. Check if the hand cursor appears exactly on the button or if it's offset.")

# Test 1: Simple button
st.subheader("Test 1: Single button in elements frame")
with elements("test_single_button"):
    mui.Button(
        "Click Me - Single Button",
        variant="contained",
        color="primary",
        onClick=lambda: st.write("Single button clicked!"),
        sx={"margin": "8px"}
    )

# Test 2: Multiple buttons
st.subheader("Test 2: Multiple buttons")
with elements("test_multi_buttons"):
    mui.Box(
        sx={"display": "flex", "gap": "8px", "padding": "8px"},
        children=[
            mui.Button("Button A", variant="contained", onClick=lambda: None),
            mui.Button("Button B", variant="outlined", onClick=lambda: None),
            mui.Button("Button C", variant="contained", color="secondary", onClick=lambda: None),
        ]
    )

# Test 3: Button with chart (tall content)
st.subheader("Test 3: Button below a chart-sized box")
with elements("test_button_after_tall"):
    mui.Box(
        sx={"display": "flex", "flexDirection": "column"},
        children=[
            mui.Box(
                sx={"height": "300px", "backgroundColor": "#eee", "display": "flex", "alignItems": "center", "justifyContent": "center"},
                children=[mui.Typography("This is a 300px tall placeholder for a chart")]
            ),
            mui.Button(
                "Click Me - After Tall Content",
                variant="contained",
                color="error",
                onClick=lambda: None,
                sx={"margin": "8px"}
            )
        ]
    )

st.write("---")
st.write("Open DevTools (F12), inspect each iframe (class=stCustomComponentV1), and note the `height` attribute.")
st.write("Also check: does the pointer cursor appear exactly on the button, or is it offset?")
