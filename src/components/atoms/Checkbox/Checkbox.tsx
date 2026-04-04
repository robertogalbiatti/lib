import React from 'react';
import styles from './Checkbox.module.scss';

type CheckboxProps = {
    children: React.ReactNode;
    onChange?: () => void;
    disabled?: boolean;
}

export const Checkbox = ({
    children, 
    onChange, 
    disabled = false
}: CheckboxProps) => {
    const checkboxClass = `${styles.container} ${disabled ? styles.disabled : ''}`;

    return (      
        <label className={checkboxClass}>
            {children}
            <input
                type="checkbox"
                onChange={onChange}
                disabled={disabled}
            />
            
      <span className={styles.checkmark}></span>
        </label>

    );
}
