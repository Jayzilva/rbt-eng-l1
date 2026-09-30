import type { ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type UserOptions = Parameters<typeof userEvent.setup>[0];

/**
 * Render a component and create a user-event instance in one step (D4).
 * Every test file builds its own `setup(overrides)` factory on top of this.
 * Pass `userOptions` for fake timers, e.g. `{ advanceTimers: jest.advanceTimersByTime }`.
 */
export function renderWithUser(
  ui: ReactElement,
  { userOptions, ...renderOptions }: RenderOptions & { userOptions?: UserOptions } = {},
) {
  return { user: userEvent.setup(userOptions), ...render(ui, renderOptions) };
}
