import { defineConfig } from "cypress";
export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  viewportWidth: 1920,
  viewportHeight: 720,
  reporter: "junit",
  reporterOptions: {
    testsuitesTitle: true,
    mochaFile: "./test-results/cypress.[hash].xml"
  },
  e2e: {
    specPattern: "**/**.cy.ts",
  },
});
