import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
} from 'react';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>

export enum InputSize {
    BIG = 'big',
    MEDIUM = 'medium',
    SMALL = 'small',
}

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (val: string) => void;
    size?: InputSize;
}

export const Input = memo((props: InputProps) => {
    const { t } = useTranslation();

    const {
        className,
        onChange,
        value,
        placeholder,
        size = InputSize.BIG,
        disabled,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={
                classNames(
                    classes.Input,
                    { [classes.disabled]: disabled },
                    [className, classes[size]],
                )
            }
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            disabled={disabled}
            {...otherProps}
        />
    );
});
