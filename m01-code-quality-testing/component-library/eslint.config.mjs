// D10: ESLint flat config. Testing-library and jest-dom rules flag test anti-patterns
// (missing await on user-event, container queries, clumsy DOM assertions) at commit time.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['node_modules/', 'coverage/', 'dist/', 'cypress/videos/', 'cypress/screenshots/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { react, 'react-hooks': reactHooks },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    files: ['src/**/*.test.{ts,tsx}', 'tests/**/*.{ts,tsx}'],
    ...testingLibrary.configs['flat/react'],
    languageOptions: { globals: { ...globals.jest } },
  },
  {
    files: ['src/**/*.test.{ts,tsx}', 'tests/**/*.{ts,tsx}'],
    ...jestDom.configs['flat/recommended'],
  },
  // Must stay last: turns off formatting rules so Prettier owns formatting.
  prettier,
);
