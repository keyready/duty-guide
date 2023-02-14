import { classNames } from 'shared/lib/classNames/classNames';
import {
    FormEvent, memo, useCallback, useState,
} from 'react';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { createCategory } from 'entities/Category';
import classes from './CreateCategory.module.scss';

interface CreateCategoryProps {
    className?: string;
}

export const CreateCategory = memo((props: CreateCategoryProps) => {
    const {
        className,
    } = props;
    const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch();

    const sendCategory = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(createCategory({ name: title }));
        setTitle('');
    }, [dispatch, title]);

    return (
        <div className={classNames(classes.CreateCategory, {}, [className])}>
            <form onSubmit={sendCategory}>
                <Input
                    size={InputSize.SMALL}
                    placeholder="Введите название"
                    value={title}
                    onChange={setTitle}
                />
                <Button
                    theme={ButtonTheme.BLUE}
                    type="submit"
                >
                    Добавить
                </Button>
            </form>
        </div>
    );
});
