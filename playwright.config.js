const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3001/", // Base URL for the server
    trace: "on-first-retry", // Trace on failure
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm start", // Start server command
    port: 3001, // Port Playwright will wait on
    reuseExistingServer: !process.env.CI, // Only create new server in CI
    timeout: 120 * 1000, // Allow server startup time
  },
});
