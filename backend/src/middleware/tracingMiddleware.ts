import { Request, Response, NextFunction } from "express";
import { trace } from "@opentelemetry/api";

export const tracingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tracer = trace.getTracer("express-app");
  const span = tracer.startSpan(`${req.method} ${req.url}`);

  // Set request attributes
  span.setAttribute("http.method", req.method);
  span.setAttribute("http.url", req.url);

  // Handle the end of the request to finalize the trace
  res.on("finish", () => {
    // Set the status code
    span.setAttribute("http.status_code", res.statusCode);

    // Set the status of the span (optional, based on the response)
    if (res.statusCode >= 400) {
      span.setStatus({ code: 2, message: `Error: ${res.statusCode}` }); // ERROR
    } else {
      span.setStatus({ code: 0 }); // OK
    }

    span.end();
  });

  next();
};
