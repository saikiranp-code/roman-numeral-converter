import React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import RomanConverter from "./components/roman-converter/RomanConverter";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

const App: React.FC = () => {
  return (
    <Provider theme={defaultTheme} height={"100vh"}>
      <ErrorBoundary>
        <RomanConverter />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
