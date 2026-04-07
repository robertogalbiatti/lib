import { InputHTMLAttributes } from 'react';
import styles from './lib-checkbox.module.scss';

type LibCheckboxProps = {
  label?: string;
  variant?: 'primary' | 'secondary';
} & InputHTMLAttributes<HTMLInputElement>;

export const LibCheckbox = ({
  label,
  variant = 'primary',
  className = '',
  ...rest
}: LibCheckboxProps) => {
  const containerClass = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={containerClass}>
      <input type="checkbox" {...rest} />
      <span>{label}</span>
      <span className={styles.checkmark}></span>
    </label>
  );
};
