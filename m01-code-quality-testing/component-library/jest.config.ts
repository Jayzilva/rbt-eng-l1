import type { Config } from 'jest';

// Decisions: D2 (ts-jest), D3 (test locations), D6 (coverage gate).
const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { tsconfig: { jsx: 'react-jsx', module: 'commonjs', moduleResolution: 'node' } },
    ],
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  // Unit tests live next to components; integration tests in tests/integration (D3).
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}', '<rootDir>/tests/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/cypress/'],

  // D6: measure every component (tested or not), excluding barrel re-exports.
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.test.{ts,tsx}',
  ],
  coverageReporters: ['text', 'html', 'lcov', 'json-summary'],
  coverageThreshold: {
    global: { statements: 80, branches: 80, functions: 80, lines: 80 },
    './src/components/**/*.tsx': { statements: 70, branches: 70, functions: 70, lines: 70 },
  },
};

export default config;
