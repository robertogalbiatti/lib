
import { createContext, ReactNode } from 'react';
import styles from './lib-radiogroup.module.scss';

type RadioGroupContextProps = {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  disabled: boolean;
};

export const RadioGroupContext =
  createContext<RadioGroupContextProps | null>(null);
  //creating context for the radio group to share state and behavior with its children

type LibRadioGroupProps = {
  name: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  className?: string;
};

export const LibRadioGroup = ({
  name,
  label,
  value,
  onValueChange,
  children,
  orientation = 'vertical',
  disabled = false,
  className = '',
}: LibRadioGroupProps) => {
  const groupClass = [
    styles.radiogroup,
    styles[orientation],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RadioGroupContext.Provider
      value={{ name, value, onValueChange, disabled }}
    >
      <fieldset className={groupClass} disabled={disabled}>
        <legend>{label}</legend>
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};
