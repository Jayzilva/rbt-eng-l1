import { useId } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';

export interface InputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

export function Input({
  label,
  value,
  onChange,
  error,
  required = false,
  type = 'text',
  placeholder,
  onBlur,
  onFocus,
}: InputProps) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hasError = Boolean(error);

  return (
    <div className={hasError ? 'field field--error' : 'field'}>
      <label className="field__label" htmlFor={inputId}>
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            {' *'}
          </span>
        )}
      </label>
      <input
        id={inputId}
        className="field__input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        aria-required={required || undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
      />
      {hasError && (
        <p id={errorId} className="field__error">
          {error}
        </p>
      )}
    </div>
  );
}
