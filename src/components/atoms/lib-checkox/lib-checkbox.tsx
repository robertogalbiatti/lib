import React from 'react';
import styles from './lib-checkbox.module.scss';

type LibCheckboxProps = {
  children: React.ReactNode;
  onChange?: () => void;
  disabled?: boolean;
};

export const LibCheckbox = ({
  children,
  onChange,
  disabled = false,
}: LibCheckboxProps) => {
  const checkboxClass = `${styles.container} ${disabled ? styles.disabled : ''}`;

  return (
    <label className={checkboxClass}>
      {children}
      <input type="checkbox" onChange={onChange} disabled={disabled} />

      <span className={styles.checkmark}></span>
    </label>
  );
};
