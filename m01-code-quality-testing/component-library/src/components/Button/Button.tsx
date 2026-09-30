import type { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  loading = false,
  className,
  type = 'button',
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, loading ? 'btn--loading' : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-busy={loading || undefined}
      onClick={onClick}
    >
      {loading ? (
        <>
          <span className="btn__spinner" aria-hidden="true" />
          <span>Loading…</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
