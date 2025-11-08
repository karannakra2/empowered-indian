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
      'no-useless-escape': 'off', // Allow escape characters in regex.
      'no-console': 'off', // Allow console logs in upload scripts
    },
  },
])