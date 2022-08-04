import React from "react";
import ReactDOM from "react-dom/client";
import Canvas from "./Canvas";
import Image from "./Image";
import "./index.css";
import Menu from "./Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);
