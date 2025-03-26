import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/', // Your app URL or localhost for testing
    supportFile: 'cypress/support/index.ts',
  },
});
