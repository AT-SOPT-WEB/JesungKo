import React from 'react';
import { buttonDisable, buttonEnable, buttonStyle } from './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    disabled: boolean;
    onClick: () => void;
}

const Button = ({ children, disabled, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${buttonStyle} ${disabled ? buttonDisable : buttonEnable}`}
        >
            {children}
        </button>
    );
};

export default Button;
