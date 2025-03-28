import React from "react";
import RomanConverter from "./components/roman-converter/RomanConverter";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

const App: React.FC = () => {
  return (
      <ErrorBoundary>
        <RomanConverter />
      </ErrorBoundary>
  );
};

export default App;
