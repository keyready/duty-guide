import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo } from 'react';
import classes from './TextArea.module.scss';

interface TextAreaProps{
    className?: string;
    onChange: (value: string) => void;
    value: string;
    placeholder: string;
    rows?: number;
    name?: string;
}

export const TextArea = memo((props: TextAreaProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        rows = 5,
        name,
    } = props;

    return (
        <textarea
            name={name}
            rows={rows}
            className={classNames(classes.TextArea, {}, [className])}
            onChange={(event:ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
            value={value}
            placeholder={placeholder}
        />
    );
});
