import streamlit as st
from streamlit_elements_fluence import elements, mui, nivo

st.set_page_config(layout="wide")
st.title("Streamlit Elements Smoke Test")

chart_data = [
    {"country": "AD", "hot dog": 111, "burger": 72},
    {"country": "AE", "hot dog": 95, "burger": 101},
    {"country": "AF", "hot dog": 77, "burger": 64},
]

with elements("chart_button_smoke"):
    mui.Button("Save Graph as PNG")
    nivo.Bar(
        data=chart_data,
        keys=["hot dog", "burger"],
        indexBy="country",
        margin={"top": 30, "right": 20, "bottom": 50, "left": 60},
        padding=0.3,
        enableLabel=False,
        axisBottom={"legend": "country", "legendOffset": 36, "legendPosition": "middle"},
        axisLeft={"legend": "count", "legendOffset": -40, "legendPosition": "middle"},
        role="application",
        ariaLabel="chart button smoke test",
    )
