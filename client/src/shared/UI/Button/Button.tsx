import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    BLUE = 'blue'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    theme?: ButtonTheme;
    type?: 'submit' | 'button' | 'reset'
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        onClick,
        theme = ButtonTheme.PRIMARY,
        disabled,
        type = 'button',
    } = props;

    const mods: Mods = { [classes.disabled]: disabled };

    /* eslint-disable react/button-has-type */
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={classNames(classes.Button, mods, [className, classes[theme]])}
        >
            {children}
        </button>
    );
});
