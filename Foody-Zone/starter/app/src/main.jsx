import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #0a0a0f;
    color: white;
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0f;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 67, 67, 0.3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 67, 67, 0.5);
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid rgba(255, 67, 67, 0.6);
    outline-offset: 2px;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);