import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import "./styles/index.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider theme={defaultTheme} height={"100vh"}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
