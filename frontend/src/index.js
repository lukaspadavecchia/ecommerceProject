import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // Si no tienes este archivo, puedes omitirlo o crear un archivo vacío de estilo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
