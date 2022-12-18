import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
}

export const Button = memo((props: ButtonProps) => {
    const { t } = useTranslation();

    const {
        className,
        children,
        onClick,
        theme = ButtonTheme.PRIMARY,
        disabled,
    } = props;

    const mods: Mods = { [classes.disabled]: disabled };

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames(classes.Button, mods, [className, classes[theme]])}
        >
            {children}
        </button>
    );
});
