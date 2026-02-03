/// <reference types="vitest" />
import ImportMetaPlugin from '@import-meta-env/unplugin';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { run } from 'vite-plugin-run';
import vueDevTools from 'vite-plugin-vue-devtools';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    // Dynamic Env vars are not setup during tests. If you need special values for your env variables during testing, create a .env.test file.
    ...(mode !== 'test'
      ? [
          ImportMetaPlugin.vite({
            example: '../../../.env.example',
            env: '../../../.env.development',
          }),
        ]
      : []),
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/i18n/locales/**',
      ),
    }),
    run([
      {
        name: 'Generate .env typings',
        run: [
          'pnpm',
          'import-meta-env-typescript',
          '-x',
          '.env.example',
          '-o',
          './src/types/',
        ],
        pattern: ['.env.example'],
        startup: true,
      },
    ]),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8100,
    open: true,
  },
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit', 'vitest-sonar-reporter'],
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
    include: ['./tests/unit/**/*.spec.ts'],
    /** The setup files will be called before any test so we can apply global mocks there. */
    setupFiles: ['./tests/unit/vitest-setup.ts'],
  },
}));
