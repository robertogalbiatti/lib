import { useState, SelectHTMLAttributes } from 'react';
import styles from './lib-select.module.scss';

type LibSelectProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  id: string;
  clearable?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const LibSelect = ({
  label,
  variant = 'primary',
  clearable = false,
  className = '',
  id,
  children,
  value,
  defaultValue,
  onChange,
  ...rest
}: LibSelectProps) => {
  const [internalValue, setInternalValue] = useState(
    String(value ?? defaultValue ?? ''),
  );

  const currentValue = value !== undefined ? String(value) : internalValue;
  const hasValue = currentValue !== '';

  const containerClass = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  const handleChange: SelectHTMLAttributes<HTMLSelectElement>['onChange'] = (
    event,
  ) => {
    if (value === undefined) {
      setInternalValue(event.target.value);
    }

    onChange?.(event);
  };

  const handleClear = () => {
    if (value === undefined) {
      setInternalValue('');
    }

    const select = document.getElementById(id) as HTMLSelectElement | null;

    if (select) {
      select.value = '';
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div className={containerClass}>
      <select
        id={id}
        className={styles.select}
        value={currentValue}
        onChange={handleChange}
        required
        {...rest}
      >
        <option value="" disabled hidden></option>
        {children}
      </select>

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {clearable && hasValue && (
        <button
          type="button"
          className={styles.clearButton}
          aria-label={`Limpar ${label}`}
          onClick={handleClear}
        >
          ×
        </button>
      )}
    </div>
  );
};
