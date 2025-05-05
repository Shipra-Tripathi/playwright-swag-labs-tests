// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // 1. Where your tests live
  testDir: './tests',

  // 2. Global timeout per test (ms)
  timeout: 60_000,

  // 3. Controls parallelism
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // 4. Reporters
  reporter: [
    // show dot/list output in console:
    ['list'],
    // write an HTML report into playwright-report/
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  // 5. Shared settings for all tests
  use: {
    // shorthand for page.goto('/some-path')
    baseURL: 'https://www.saucedemo.com',

    // run in headless mode on CI, headed locally
    headless: process.env.CI ? true : false,

    // capture screenshot and video on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // collect a trace on first retry
    trace: 'on-first-retry',

    // default viewport
    viewport: { width: 1280, height: 720 },
  },

  // 6. Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // 7. (Optional) If you have a local dev server to start:
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
