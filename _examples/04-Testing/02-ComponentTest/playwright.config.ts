import { defineConfig, devices } from '@playwright/test';

// The gallery is served by the app's own Vite dev server (default port 5173).
const galleryURL = 'http://localhost:5173/playwright/gallery/index.html';

/**
 * See https://playwright.dev/docs/test-components (story-gallery model).
 */
export default defineConfig({
  testDir: './tests/components',
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'components',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: galleryURL,
        serviceWorkers: 'block',
        reuseContext: true,
      },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: galleryURL,
    reuseExistingServer: !process.env.CI,
  },
});
