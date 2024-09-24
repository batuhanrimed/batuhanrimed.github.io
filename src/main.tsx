import { createRoot } from "react-dom/client";
import "primeicons/primeicons.css";
import "./index.scss";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Startup } from "./Startup";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Startup />
    </BrowserRouter>
  </StrictMode>
);
