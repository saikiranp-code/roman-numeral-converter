module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom", // Use the installed jsdom environment
    roots: ["<rootDir>/src"],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@adobe/react-spectrum)/', // Ensure @adobe/react-spectrum is transformed
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
  