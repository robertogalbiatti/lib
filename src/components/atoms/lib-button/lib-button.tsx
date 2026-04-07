import { ButtonHTMLAttributes } from 'react';
import styles from './lib-button.module.scss';

type LibButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const LibButton = ({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  ...rest
}: LibButtonProps) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
