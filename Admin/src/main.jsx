// src/main.jsx (Corrected code)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Do not import BrowserRouter here
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);