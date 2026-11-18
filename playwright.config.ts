import { defineConfig, devices } from "@playwright/test";

// Stabilize font rendering across machines (recommended by Argos).
const launchOptions = {
  args: ["--disable-lcd-text", "--font-render-hinting=none"],
};

const port = Number(process.env.VISUAL_PORT ?? 4173);

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    [process.env.CI ? "dot" : "list"],
    [
      "@argos-ci/playwright/reporter",
      { uploadToArgos: !!process.env.CI && !!process.env.ARGOS_TOKEN },
    ],
  ],
  use: {
    // The site is served under its baseUrl; tests use paths relative to it.
    baseURL: `http://localhost:${port}/demo-docusaurus/`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions } },
  ],
  webServer: {
    // Static output of `npm run build`; build it before running tests.
    command: `npm run serve -- --port ${port} --no-open`,
    url: `http://localhost:${port}/demo-docusaurus/`,
    reuseExistingServer: !process.env.CI,
    env: { NO_UPDATE_CHECK: "1", NO_UPDATE_NOTIFIER: "1" },
  },
});
