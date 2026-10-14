import { InputHTMLAttributes } from 'react';
import styles from './lib-text-field.module.scss';

type LibTextField = {
  variant?: 'primary' | 'secondary';
} & InputHTMLAttributes<HTMLInputElement>;

export const LibTextField = ({
  type,
  id,
  required,
  variant = 'primary',
  className = '',
  ...rest
}: LibTextField) => {
  const containerClass = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={containerClass}>
      <input type="text" {...rest} />
    </label>
  );
};
