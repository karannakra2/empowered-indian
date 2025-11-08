import baseConfig, { globals } from '../eslint.config.js'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...baseConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
])