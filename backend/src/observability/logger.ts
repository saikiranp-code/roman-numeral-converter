import winston from "winston";
import LokiTransport from "winston-loki";

const { combine, timestamp, printf } = winston.format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] : ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), customFormat),
  transports: [
    new winston.transports.Console({
      format: combine(winston.format.colorize(), winston.format.simple()),
    }),
    new LokiTransport({
      host: "http://loki:3100", // Loki service address
      labels: { app: "roman-converter" },
    }),
    new winston.transports.File({ filename: "logs/server.log" }),
  ],
});

if (process.env.NODE_ENV === "development") {
  logger.info("Nodemon is running, file changes will trigger a restart...");
}

export { logger };
