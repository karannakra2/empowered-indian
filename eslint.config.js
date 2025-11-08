import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

// Base ESLint configuration shared across all packages
export default defineConfig([
  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/logs/**',
      '**/data/**',
      '**/coverage/**',
      '**/.turbo/**',
    ],
  },

  // Base config for all JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'eqeqeq': ['error', 'always'],
      'no-undef': 'error',
    },
  },
])

// Export for packages to extend
export { js, globals }