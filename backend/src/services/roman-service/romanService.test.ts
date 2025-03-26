import { convertToRoman } from "./romanService";

describe("Roman Service", () => {
  it("should convert 1999 to MCMXCIX", () => {
    const result = convertToRoman(1999);
    expect(result).toBe("MCMXCIX");
  });

  it("should convert 4 to IV", () => {
    const result = convertToRoman(4);
    expect(result).toBe("IV");
  });

  it("should convert 3999 to MMMCMXCIX", () => {
    const result = convertToRoman(3999);
    expect(result).toBe("MMMCMXCIX");
  });

  it("should return empty string for invalid input", () => {
    const result = convertToRoman(0);
    expect(result).toBe("");
  });
});
