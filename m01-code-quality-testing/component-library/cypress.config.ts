import { defineConfig } from 'cypress';

// D9 + P3: bundled Electron, headless in `cypress run`; `cypress open` while writing flows.
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    screenshotOnRunFailure: true,
  },
});
