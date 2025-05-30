import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App"; 
import { LanguageProvider } from "./context/LanguageContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <LanguageProvider>
        <App /> 
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
