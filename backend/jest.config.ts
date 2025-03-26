/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest", // Uses ts-jest for TypeScript support
  testEnvironment: "node", // Simulates a Node.js environment
  verbose: true, // Provides detailed test output
  clearMocks: true, // Clears mock calls & instances between tests
  moduleFileExtensions: ["ts", "js", "json"], // Recognizes these file types
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transforms TypeScript files
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s"], // Matches test files
  collectCoverage: true, // Optional: collects coverage information
};
