import { validateRomanConverterInput } from "./validation";

describe("validateRomanConverterInput", () => {
  it("should return an error if the input is not a valid number", () => {
    expect(validateRomanConverterInput("invalid")).toBe(
      "Please enter a valid number."
    );
  });

  it("should return an error if the input is less than 1", () => {
    expect(validateRomanConverterInput("0")).toBe(
      "Please enter a number between 1 and 3999."
    );
  });

  it("should return an error if the input is greater than 3999", () => {
    expect(validateRomanConverterInput("4000")).toBe(
      "Please enter a number between 1 and 3999."
    );
  });

  it("should return null for valid input", () => {
    expect(validateRomanConverterInput("1999")).toBe(null);
  });
});
