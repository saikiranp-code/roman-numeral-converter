import React from "react";
import { Text, View, Heading } from "@adobe/react-spectrum";

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // We can also log this to monitoring tools
    // console.error("Unexpected UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View
          width="100%"
          height="100%"
          padding="size-200"
          backgroundColor="static-white"
        >
          <Heading level={3}>Oops! Something went wrong.</Heading>
          <Text>Please refresh the page or contact support.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
