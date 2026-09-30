import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant: AlertVariant;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  autoDismissMs?: number;
}

export function Alert({ variant, children, dismissible = false, onDismiss, autoDismissMs }: AlertProps) {
  const [visible, setVisible] = useState(true);
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    if (autoDismissMs === undefined || autoDismissMs <= 0) return undefined;
    const timer = window.setTimeout(() => {
      setVisible(false);
      onDismissRef.current?.();
    }, autoDismissMs);
    return () => window.clearTimeout(timer);
  }, [autoDismissMs]);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div role="alert" className={`alert alert--${variant}`}>
      <div className="alert__message">{children}</div>
      {dismissible && (
        <button type="button" className="alert__dismiss" aria-label="Dismiss" onClick={handleDismiss}>
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
}
