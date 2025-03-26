import express, { Request, Response, NextFunction } from "express";
import { register } from "prom-client";
import { loggingMiddleware } from "./middleware/loggerMiddleware";
import { metricsMiddleware } from "./middleware/metricsMiddleware";
import { tracingMiddleware } from "./middleware/tracingMiddleware";
import { romanRoutes } from "./routes/roman-routes/romanRoutes";
import { logger } from "./observability/logger";
import cors from "cors";

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for all origins (use a more specific origin in production)
app.use(cors());

// Apply middlewares globally
app.use(loggingMiddleware);
app.use(metricsMiddleware);
app.use(tracingMiddleware);

// Roman numeral conversion controller
app.use("/api", romanRoutes);

// Metrics endpoint for Prometheus
app.get("/api/metrics", async (req: Request, res: Response) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
// app.listen(PORT, () => {
//   logger.info(`Server running on port ${PORT}`);
// });

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
  });
}

export { app };
