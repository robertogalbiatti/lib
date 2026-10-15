import { InputHTMLAttributes } from 'react';
import styles from './lib-text-field.module.scss';

type LibTextField = {
  variant?: 'primary' | 'secondary';
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const LibTextField = ({
  type = 'text',
  id,
  required,
  variant = 'primary',
  label,
  className = '',
  ...rest
}: LibTextField) => {
  const containerClass = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClass}>
      <input
        {...rest}
        id={id}
        type={type}
        required={required}
        placeholder=" "
      />

      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
    </div>
  );
};
