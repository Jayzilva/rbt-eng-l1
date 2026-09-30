import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ label, options, value, onChange, placeholder = 'Select…' }: DropdownProps) {
  const baseId = useId();
  const labelId = `${baseId}-label`;
  const valueId = `${baseId}-value`;
  const listboxId = `${baseId}-listbox`;
  const optionId = (index: number) => `${baseId}-option-${index}`;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return undefined;
    const handleMouseDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [open]);

  const openList = () => {
    setActiveIndex(options.findIndex((option) => option.value === value));
    setOpen(true);
  };

  const closeList = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const selectOption = (option: DropdownOption) => {
    onChange(option.value);
    closeList();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!open) {
          openList();
        } else {
          setActiveIndex((index) => Math.min(index + 1, options.length - 1));
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!open) {
          openList();
        } else {
          setActiveIndex((index) => Math.max(index - 1, 0));
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (!open) {
          openList();
        } else {
          selectOption(options[activeIndex]);
        }
        break;
      case 'Escape':
        if (open) {
          event.preventDefault();
          closeList();
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown" ref={containerRef}>
      <span id={labelId} className="dropdown__label">
        {label}
      </span>
      <button
        ref={buttonRef}
        type="button"
        className="dropdown__button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-labelledby={`${labelId} ${valueId}`}
        aria-activedescendant={open && activeIndex >= 0 ? optionId(activeIndex) : undefined}
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={handleKeyDown}
      >
        <span id={valueId} className={selected ? undefined : 'dropdown__placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
      </button>
      {open && (
        <ul id={listboxId} role="listbox" aria-labelledby={labelId} className="dropdown__list">
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const classes = [
              'dropdown__option',
              isSelected ? 'dropdown__option--selected' : '',
              index === activeIndex ? 'dropdown__option--active' : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <li
                key={option.value}
                id={optionId(index)}
                role="option"
                aria-selected={isSelected}
                className={classes}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
