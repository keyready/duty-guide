import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo } from 'react';
import classes from './InputFile.module.scss';
import Upload from './upload.svg';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    message?: string;
    many?: boolean
}

export const InputFile = memo((props: InputFileProps) => {
    const {
        className,
        message,
        many = false,
        ...otherProps
    } = props;

    return (
        <div className={classes.inputWrapper}>
            <input
                className={classNames(classes.InputFile)}
                id="file_input"
                type="file"
                multiple={many}
                {...otherProps}
            />
            <label
                className={classes.fileButton}
                htmlFor="file_input"
            >
                <span className={classes.fileInputWrapper}>
                    <Upload
                        width={50}
                        height={50}
                    />
                </span>
                <span className={classes.fileInputName}>{message}</span>
            </label>
        </div>
    );
});
