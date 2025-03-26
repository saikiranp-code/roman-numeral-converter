export const validateRomanConverterInput = (input: string): string | null => {
  const num = Number(input);

  if (!input || isNaN(num)) {
    return "Please enter a valid number.";
  }

  if (num < 1 || num > 3999) {
    return "Please enter a number between 1 and 3999.";
  }

  return null; // No errors
};
