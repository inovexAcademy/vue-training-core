/// <reference types="vitest" />
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/i18n/locales/**',
      ),
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tests': fileURLToPath(new URL('./tests', import.meta.url)),
    },
  },
  define: {
    __VUE_PROD_DEVTOOLS__: true, // enable Vue Devtools in production build
  },
  server: {
    port: 8100,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    passWithNoTests: true,
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
