import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http"; // OTLP HTTP Exporter
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import { resourceFromAttributes } from "@opentelemetry/resources";

// Configure OTLP Exporter for HTTP
const exporter = new OTLPTraceExporter({
  url: "http://localhost:4318/v1/traces", // OTLP endpoint for traces (can change to your server)
});

// Define the service name directly in the Resource object
const sdk = new NodeSDK({
  traceExporter: exporter,
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "roman-converter",
    [ATTR_SERVICE_VERSION]: "1.0",
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

export { sdk };
