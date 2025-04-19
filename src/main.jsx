import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import AgeForm from "./AgeForm";
import ProductPage from "./ProductPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductPage />
  </StrictMode>
);
