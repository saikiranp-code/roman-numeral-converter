import { conversionCount, conversionHistogram } from "./metrics";

// Mock the inc method of the Counter and startTimer method of the Histogram
jest.mock("prom-client", () => {
  return {
    Counter: jest.fn().mockImplementation(() => ({
      inc: jest.fn(),
    })),
    Histogram: jest.fn().mockImplementation(() => ({
      startTimer: jest.fn(() => jest.fn()), // Mock startTimer to return a mock function (timer)
    })),
    collectDefaultMetrics: jest.fn(),
  };
});

describe("Metrics", () => {
  it("should track conversion count", () => {
    // Call inc method of conversionCount with a label
    conversionCount.inc({ status: "success" });

    // Verify that inc was called
    expect(conversionCount.inc).toHaveBeenCalled();
    expect(conversionCount.inc).toHaveBeenCalledWith({ status: "success" });
  });

  it("should track request durations in histogram", () => {
    // Start the timer
    const timer = conversionHistogram.startTimer();

    // Call the timer function
    timer();

    // Verify that the timer function was called
    expect(timer).toHaveBeenCalled();
  });
});
