import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({
    children, 
    onClick, 
    disabled = false, 
    variant = 'primary'
}: ButtonProps) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
