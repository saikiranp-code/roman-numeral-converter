import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RomanConverter from "./RomanConverter";
import * as apiService from "../../services/apiService";

jest.mock("../../services/apiService", () => ({
  fetchRomanNumeral: jest.fn(),
}));

describe("RomanConverter", () => {
  it("should render the Roman converter UI correctly", () => {
    render(<RomanConverter />);
    expect(screen.getByLabelText(/Enter a number/i)).toBeInTheDocument();
    expect(screen.getByText(/Convert to roman numeral/i)).toBeInTheDocument();
  });

  it("should display the Roman numeral result when valid input is provided", async () => {
    render(<RomanConverter />);

    const input = screen.getByLabelText(/Enter a number/i);
    const button = screen.getByText(/Convert to roman numeral/i);

    const mockRomanNumeralResponse = { output: "MCMXCIX" };

    // Mock the resolved value of fetchRomanNumeral
    (apiService.fetchRomanNumeral as jest.Mock).mockResolvedValueOnce(
      mockRomanNumeralResponse
    );

    // Simulate user input and click on the button
    fireEvent.change(input, { target: { value: "1999" } });
    fireEvent.click(button);

    // Wait for the Roman numeral result to appear
    await waitFor(() => {
      // Ensure "Roman Numeral:" label exists
      expect(screen.getByText(/Roman Numeral:/i)).toBeInTheDocument();

      // Ensure "MCMXCIX" appears separately
      expect(screen.getByText("MCMXCIX")).toBeInTheDocument();
    });
  });

  it("should show an error message if API fails", async () => {
    render(<RomanConverter />);

    const input = screen.getByLabelText(/Enter a number/i);
    const button = screen.getByText(/Convert to roman numeral/i);

    (apiService.fetchRomanNumeral as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch data")
    );

    fireEvent.change(input, { target: { value: "1999" } });
    fireEvent.click(button);

    const errorMessage = await screen.findByText("Failed to fetch data");
    expect(errorMessage).toBeInTheDocument();
  });
});
