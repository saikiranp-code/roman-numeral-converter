import { Request, Response, NextFunction } from "express";
import { conversionCount, conversionHistogram } from "../observability/metrics";

export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const endTimer = conversionHistogram.startTimer(); // Start measuring time
  res.on("finish", () => {
    const status = res.statusCode === 200 ? "success" : "failure";
    conversionCount.inc({ status });
    endTimer(); // Stop the timer and record the duration
  });

  next();
};
