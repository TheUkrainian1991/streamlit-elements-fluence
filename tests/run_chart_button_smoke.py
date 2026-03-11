from pathlib import Path
import os
import json
import tempfile


def _setup_tmpdir(repo_root: Path) -> None:
    tmpdir = repo_root / ".tmp_streamlit_test"
    tmpdir.mkdir(parents=True, exist_ok=True)
    os.environ["TMPDIR"] = str(tmpdir)
    tempfile.tempdir = str(tmpdir)


def _format_exceptions(exceptions) -> str:
    lines = []
    for index, exc in enumerate(exceptions, start=1):
        lines.append(f"[{index}] {exc.value}")
        if exc.stack_trace:
            lines.extend(exc.stack_trace)
        lines.append("")
    return "\n".join(lines).strip()


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    _setup_tmpdir(repo_root)

    # Import only after TMPDIR is set; streamlit.testing creates temp dirs at import time.
    from streamlit.testing.v1 import AppTest

    app_path = repo_root / "tests" / "apps" / "chart_button_smoke_app.py"
    app_test = AppTest.from_file(str(app_path))
    app_test.run(timeout=30)

    if app_test.exception:
        message = _format_exceptions(app_test.exception)
        raise AssertionError(f"Smoke test failed with Streamlit exception(s):\n{message}")

    components = [element for element in app_test.main if element.type == "component_instance"]
    if not components:
        raise AssertionError("Smoke test failed: no custom component instance was rendered.")

    payload = json.loads(components[0].proto.json_args)
    js = payload.get("js", "")
    if 'render("muiElements","Button"' not in js:
        raise AssertionError("Smoke test failed: app payload does not contain the expected MUI button.")
    if 'render("chartNivo","Bar"' not in js:
        raise AssertionError("Smoke test failed: app payload does not contain the expected Nivo bar chart.")

    print("PASS: chart+button smoke app ran without component/backend exceptions.")


if __name__ == "__main__":
    main()
