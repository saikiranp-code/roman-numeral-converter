import { fetchRomanNumeral } from "./apiService";

describe("fetchRomanNumeral", () => {
  it("should fetch Roman numeral correctly", async () => {
    const mockResponse = { output: "MCMXCIX" };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchRomanNumeral("1999");
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error if response is not ok", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      text: async () => "An error occurred",
    });

    await expect(fetchRomanNumeral("1999")).rejects.toThrow(
      "An error occurred"
    );
  });

  it("should throw an error for network issues", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchRomanNumeral("1999")).rejects.toThrow("Network Error");
  });
});
