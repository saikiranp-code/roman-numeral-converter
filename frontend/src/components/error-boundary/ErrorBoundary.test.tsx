import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

// Mock component to throw an error
const ThrowError = () => {
  throw new Error("Test Error");
};

it("should catch an error and display a fallback UI", () => {
  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  // Check if fallback UI is displayed
  expect(screen.getByText("Oops! Something went wrong.")).toBeInTheDocument();
  expect(
    screen.getByText("Please refresh the page or contact support.")
  ).toBeInTheDocument();
});
