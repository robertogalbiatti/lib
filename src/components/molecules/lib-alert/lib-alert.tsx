import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import styles from './lib-alert.module.scss';

export type LibAlertVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export type LibAlertProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'onClose'
> & {
  variant?: LibAlertVariant;
  title?: ReactNode;
  children: ReactNode;
  dismissible?: boolean;
  onClose?: () => void;
};

export const LibAlert = ({
  variant = 'primary',
  title,
  children,
  dismissible = false,
  onClose,
  className,
  ...rest
}: LibAlertProps) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    if (closing) return;

    setClosing(true);

    timerRef.current = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 150);
  };

  if (!visible) return null;

  const alertClasses = [
    styles.alert,
    styles[variant],
    dismissible ? styles.dismissible : '',
    closing ? styles.fadeOut : styles.fadeIn,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div {...rest} className={alertClasses} role="alert" aria-atomic="true">
      <div className={styles.content}>
        {title && <strong className={styles.title}>{title}</strong>}

        <div className={styles.message}>{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
          aria-label="Close"
          disabled={closing}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

export default LibAlert;
