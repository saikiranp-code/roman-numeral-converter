import { sdk } from "./tracing";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

// Mock the OpenTelemetry SDK and OTLPExporter
jest.mock("@opentelemetry/sdk-node", () => ({
  NodeSDK: jest.fn().mockImplementation(() => ({
    start: jest.fn(), // Mock the start method
  })),
}));

// Mock the OTLPTraceExporter constructor to spy on the URL config
jest.mock("@opentelemetry/exporter-trace-otlp-http", () => ({
  OTLPTraceExporter: jest.fn().mockImplementation(config => {
    return {
      export: jest.fn(),
    };
  }),
}));

describe("OpenTelemetry Trace Setup", () => {
  it("should initialize the SDK and exporter correctly", () => {
    // Create an instance of the mocked SDK
    const sdkInstance = new (require("@opentelemetry/sdk-node").NodeSDK)();

    // Call the start method of the SDK instance
    sdkInstance.start();

    // Verify that the start method was called
    expect(sdkInstance.start).toHaveBeenCalled();

    // Verify that OTLPTraceExporter was created and its export method exists
    const exporter = new OTLPTraceExporter({
      url: "http://localhost:4318/v1/traces",
    });
    expect(exporter.export).toBeDefined();
  });

  it("should have correct trace exporter URL", () => {
    const expectedUrl = "http://localhost:4318/v1/traces";
    new OTLPTraceExporter({
      url: expectedUrl,
    });

    // Verify that the constructor was called with the correct URL
    expect(OTLPTraceExporter).toHaveBeenCalledWith(
      expect.objectContaining({
        url: expectedUrl,
      })
    );
  });
});
