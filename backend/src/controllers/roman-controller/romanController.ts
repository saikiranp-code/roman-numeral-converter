import { Request, Response, Router } from "express";
import { convertToRoman } from "../../services/roman-service/romanService";
import { logger } from "../../observability/logger";

const router = Router();

/**
 * @route GET /romannumeral
 * @desc Convert a number to a Roman numeral
 * @query {string} query - The number to be converted
 * @returns {JSON} { input: number, output: string }
 */
router.get("/", (req: Request, res: Response) => {
  const { query } = req.query;

  // Check if query parameter is provided
  if (!query) {
    const errorMessage = "Query parameter 'query' is required.";
    logger.warn(errorMessage);
    return res.status(400).json({ error: errorMessage });
  }

  const num = Number(query);

  // Validate input: Ensure it's a number between 1 and 3999
  if (isNaN(num) || num < 1 || num > 3999) {
    const errorMessage = `Invalid input: ${query}. Please provide a number between 1 and 3999.`;
    logger.error(errorMessage);
    return res.status(400).json({ error: errorMessage });
  }

  // Convert to Roman numeral
  const romanNumeral = convertToRoman(num);
  logger.info(`Converted ${num} to ${romanNumeral}`);

  return res.status(200).json({ input: num, output: romanNumeral });
});

export const romanController = router;
