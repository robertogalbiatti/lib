import React from 'react';
import styles from './lib-button.module.scss';

type LibButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const LibButton = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
}: LibButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
