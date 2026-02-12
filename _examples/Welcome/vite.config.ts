/// <reference types="vitest" />
import ImportMetaPlugin from '@import-meta-env/unplugin';
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { run } from 'vite-plugin-run';
import { coverageConfigDefaults } from 'vitest/config';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    // Dynamic Env vars are not setup during tests. If you need special values for your env variables during testing, create a .env.test file.
    ...(mode !== 'test'
      ? [
          ImportMetaPlugin.vite({
            example: '../../.env.example',
            env: '../../.env.development',
          }),
        ]
      : []),
    vue(),
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
