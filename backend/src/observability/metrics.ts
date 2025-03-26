import { Counter, Histogram, collectDefaultMetrics } from "prom-client";

// Set up default metrics collection (CPU, memory usage, etc.)
collectDefaultMetrics();

// Create a custom metric to track conversions count
const conversionCount = new Counter({
  name: "roman_numeral_conversion_count",
  help: "Total number of Roman numeral conversions",
  labelNames: ["status"], // Track conversion success/failure
});

//Create a custom metric to track duration for conversion
const conversionHistogram = new Histogram({
  name: "roman_numeral_request_duration_seconds",
  help: "Histogram for request duration in seconds",
  buckets: [1, 2, 3, 4, 5, 6, 10],
});

export { conversionCount, conversionHistogram };
