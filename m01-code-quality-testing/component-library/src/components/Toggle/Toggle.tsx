import { useId, useState } from 'react';

export interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ label, checked, onChange, disabled = false }: ToggleProps) {
  const labelId = useId();
  const [isOn, setIsOn] = useState(checked);

  const handleClick = () => {
    const next = !isOn;
    setIsOn(next);
    onChange(next);
  };

  return (
    <div className={disabled ? 'toggle toggle--disabled' : 'toggle'}>
      <button
        type="button"
        role="switch"
        className={isOn ? 'toggle__track toggle__track--on' : 'toggle__track'}
        aria-checked={isOn}
        aria-labelledby={labelId}
        disabled={disabled}
        onClick={handleClick}
      >
        <span className="toggle__thumb" aria-hidden="true" />
      </button>
      <span id={labelId} className="toggle__label">
        {label}
      </span>
    </div>
  );
}
