import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

const excludedFiles = [
  ...configDefaults.exclude,
  'env.*',
  'postcss.config.js',
  'tailwind.config.js',
  'e2e/**',
  'src/constants.ts',
  'src/main.ts',
  'src/api/*.ts',
  'src/api/types/**',
  'src/router/**',
  'src/types/**',
];

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: excludedFiles,
      root: fileURLToPath(new URL('./', import.meta.url)),
      outputFile: {
        json: 'coverage/report.json',
      },
      coverage: {
        exclude: excludedFiles,
      },
    },
  }),
);
