import request from "supertest";
import { app } from "../../server";

describe("Roman Routes", () => {
  // Test for valid /api/romannumeral route
  it("should return a valid response for /api/romannumeral", async () => {
    const response = await request(app).get("/api/romannumeral?query=10");
    expect(response.status).toBe(200); // Expecting 200 for successful request
    // Assuming the controller handles Roman numeral conversion, check the result
    // For example, it should convert '10' to 'X' in Roman numerals
    expect(response.body.output).toBe("X");
  });

  //Test for invalid route
  it("should return 404 for unmatched routes", async () => {
    const response = await request(app).get("/api/invalidroute");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Route not found");
  });
});
