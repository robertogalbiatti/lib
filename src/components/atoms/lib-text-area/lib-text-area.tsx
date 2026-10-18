import { TextareaHTMLAttributes } from 'react';
import styles from './lib-text-area.module.scss';

type LibTextArea = {
  variant?: 'primary' | 'secondary';
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const LibTextArea = ({
  id,
  required,
  variant = 'primary',
  label,
  className = '',
  ...rest
}: LibTextArea) => {
  const containerClass = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(' ');

   return (
    <div className={containerClass}>
      <textarea
        {...rest}
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
