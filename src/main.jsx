import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./assets/style/base/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);