// Loaded once per test file via setupFilesAfterEnv (jest.config.ts).
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
