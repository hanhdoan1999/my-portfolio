import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/fonts.scss";
import DarkModeProvider from "./Context/useDarkMode";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </DarkModeProvider>
  </React.StrictMode>
);
