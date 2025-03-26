import express from "express";
import request from "supertest"; // supertest helps to simulate HTTP requests
import { romanController } from "./romanController";
import { convertToRoman } from "../../services/roman-service/romanService";

// Mocking the external service used by the controller
jest.mock("../../services/roman-service/romanService", () => ({
  convertToRoman: jest.fn(),
}));

const app = express();
app.use("/api/romannumeral", romanController);

describe("Roman Controller", () => {
  it("should return 400 if 'query' is not provided", async () => {
    const response = await request(app).get("/api/romannumeral");

    // Expecting a 400 status with a corresponding error message
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Query parameter 'query' is required.",
    });
  });

  it("should return 400 for invalid number input", async () => {
    const response = await request(app).get("/api/romannumeral?query=invalid");

    // Expecting a 400 status with the corresponding error message
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error:
        "Invalid input: invalid. Please provide a number between 1 and 3999.",
    });
  });

  it("should return 200 for valid number", async () => {
    const romanNumeral = "MCMXCIX"; // Expected Roman numeral output
    (convertToRoman as jest.Mock).mockReturnValue(romanNumeral);

    const response = await request(app).get("/api/romannumeral?query=1999");

    // Expecting a 200 status with the Roman numeral result
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      input: 1999,
      output: romanNumeral,
    });
  });
});
