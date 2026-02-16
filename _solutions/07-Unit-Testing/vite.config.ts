/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tests': fileURLToPath(new URL('./tests', import.meta.url)),
    },
  },
  server: {
    port: 8100,
    open: true,
  },
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit', 'vitest-sonar-reporter'],
    exclude: ['**/tests/components/**'],
    outputFile: {
      junit: 'test-results/results-unit.xml',
      'vitest-sonar-reporter': 'test-results/sonar-report.xml',
    },
    coverage: {
      provider: 'v8',
      reporter: ['clover', 'lcov', 'cobertura'],
      include: ['src'],
      exclude: [...coverageConfigDefaults.exclude, '**/*.stories.*', 'src/api'],
    },
    include: ['./tests/**/*.spec.ts'],
    /** The setup files will be called before any test so we can apply global mocks there. */
    setupFiles: ['./tests/vitest-setup.ts'],
  },
}));
