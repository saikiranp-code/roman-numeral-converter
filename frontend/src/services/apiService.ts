import { RomanNumeralResponse } from "../types/RomanNumeralResponse";
const API_BASE_URL = "http://localhost:8080/api/romannumeral";

export const fetchRomanNumeral = async (
  num: string
): Promise<RomanNumeralResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}?query=${num}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "An error occurred while converting.");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    // Handle specific fetch errors
    throw new Error(error.message || "An unexpected error occurred.");
  }
};
