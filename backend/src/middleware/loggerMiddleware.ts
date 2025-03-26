import { Request, Response, NextFunction } from "express";
import { logger } from "../observability/logger";

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  res.on("finish", () => {
    logger.info(
      `Request to ${req.url} completed with status code: ${res.statusCode}`
    );
  });

  next();
};
