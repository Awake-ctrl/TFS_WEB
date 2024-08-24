import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ImageCardGroup from "./JakeComponents/ImageCardGroup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageCardGroup />
  </StrictMode>
);
