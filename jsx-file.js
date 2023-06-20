import React from "react";
import ReactDOM from "react-dom";
import { jsx as _jsx } from "react/jsx-runtime";
const header = /*#__PURE__*/_jsx("h1", {
  children: "Hello World"
});
const app = /*#__PURE__*/_jsx("div", {
  children: header
});
ReactDOM.render(app, document.getElementById("root"));