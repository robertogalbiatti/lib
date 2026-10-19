import { InputHTMLAttributes, useContext } from 'react';
import { RadioGroupContext } from '../../molecules/lib-radiogroup/lib-radiogroup';
import styles from './lib-radiobutton.module.scss';

type LibRadioButtonProps = {
  label: string;
  value: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'name' | 'value' | 'checked' | 'onChange'
>;

export const LibRadioButton = ({
  id,
  label,
  required,
  variant = 'primary',
  className = '',
  disabled = false,
  ...rest
}: LibRadioButtonProps) => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error('LibRadioButton must be used within LibRadioGroup.');
  }

  const { name, value, onValueChange, disabled: groupDisabled } = context;

  const radioClass = [styles.radiobutton, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || groupDisabled;

  return (
    <div
      className={`${styles.radiobuttonContainer} ${
        isDisabled ? styles.disabled : ''
      }`}
    >
      <input
        {...rest}
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={context.value === value}
        onChange={() => onValueChange(value)}
        required={required}
        disabled={isDisabled}
        className={radioClass}
      />

      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
    </div>
  );
};
