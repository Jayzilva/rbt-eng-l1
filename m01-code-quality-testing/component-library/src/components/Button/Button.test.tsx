import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { renderWithUser } from '../../../tests/utils';
import { Button, type ButtonProps } from './Button';

// Arrange helper (D4): defaults + per-test overrides; onClick is a recording stand-in (D5).
function setup(props: Partial<ButtonProps> = {}) {
  const onClick = jest.fn();
  const utils = renderWithUser(
    <Button onClick={onClick} {...props}>
      {props.children ?? 'Save'}
    </Button>,
  );
  const button = () => screen.getByRole('button', { name: /save|loading/i });
  return { ...utils, onClick, button };
}

describe('Button', () => {
  describe('rendering', () => {
    it('renders its children as the accessible name', () => {
      setup();

      expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('defaults to type="button" so it never submits a form by accident', () => {
      const { button } = setup();

      expect(button()).toHaveAttribute('type', 'button');
    });

    it('uses type="submit" when asked', () => {
      const { button } = setup({ type: 'submit' });

      expect(button()).toHaveAttribute('type', 'submit');
    });

    it('keeps a custom className alongside its own classes', () => {
      const { button } = setup({ className: 'toolbar-action' });

      expect(button()).toHaveClass('toolbar-action');
    });

    // Variants are purely visual; the class names are the contract with styles.css.
    it.each(['primary', 'secondary'] as const)('applies the %s variant class', (variant) => {
      const { button } = setup({ variant });

      expect(button()).toHaveClass(`btn--${variant}`);
    });
  });

  describe('interactions', () => {
    it('calls onClick once when clicked', async () => {
      const { user, onClick, button } = setup();

      await user.click(button());

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('can be activated from the keyboard with Enter and Space', async () => {
      const { user, onClick } = setup();

      await user.tab();
      await user.keyboard('{Enter}');
      await user.keyboard(' ');

      expect(onClick).toHaveBeenCalledTimes(2);
    });

    it('does not call onClick when disabled', async () => {
      const { user, onClick, button } = setup({ disabled: true });

      await user.click(button());

      expect(onClick).not.toHaveBeenCalled();
    });

    it('is skipped by keyboard focus when disabled', async () => {
      const { user, button } = setup({ disabled: true });

      await user.tab();

      expect(button()).not.toHaveFocus();
    });
  });

  describe('edge cases', () => {
    it('reports itself as disabled to assistive technology', () => {
      const { button } = setup({ disabled: true });

      expect(button()).toBeDisabled();
    });

    it('shows a loading indicator while loading', () => {
      setup({ loading: true });

      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('does not call onClick while loading', async () => {
      const { user, onClick, button } = setup({ loading: true });

      await user.click(button());

      expect(onClick).not.toHaveBeenCalled();
    });

    it('works without an onClick handler', async () => {
      const { user } = renderWithUser(<Button>Save</Button>);

      await user.click(screen.getByRole('button', { name: 'Save' }));

      expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it.each<[string, Partial<ButtonProps>]>([
      ['default', {}],
      ['disabled', { disabled: true }],
      ['loading', { loading: true }],
    ])('has no axe violations when %s', async (_state, props) => {
      const { container } = setup(props);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
