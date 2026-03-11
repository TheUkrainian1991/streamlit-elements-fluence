import json


class Element:
    __slots__ = ("_frame", "_module", "_element", "_props", "_children")

    def __init__(self, frame, module, element):
        self._frame = frame
        self._module = json.dumps(module)
        self._element = json.dumps(element)
        self._props = ""
        self._children = ""

    def __enter__(self):
        self._frame.capture_children()

    def __exit__(self, *_):
        self._frame.save_children(self)

    def __call__(self, *children, **props):
        self._frame.register_element(self)

        # Optional alias: allow on_change to map to React's onChange prop.
        on_change = props.pop("on_change", None)
        if on_change is not None:
            props["onChange"] = on_change

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
        return f"render({self._module},{self._element},{{{self._props}}},[{self._children}])"
