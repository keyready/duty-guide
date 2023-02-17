import { classNames } from 'shared/lib/classNames/classNames';
import {
    FormEvent, memo, useCallback, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from 'entities/Category';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { createUser } from 'entities/User/model/services/UserService';
import { HSelect } from 'shared/UI/HSelect/HSelect';
import classes from './CreateUser.module.scss';

interface CreateUserProps {
    className?: string;
}

export const CreateUser = memo((props: CreateUserProps) => {
    const {
        className,
    } = props;

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [middlename, setMiddlename] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const dispatch = useDispatch();

    const sendCategory = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(createUser({
            firstname,
            middlename,
            lastname,
            role,
        }));
        setLastname('');
        setFirstname('');
        setMiddlename('');
        setRole('');
    }, [dispatch, firstname, lastname, middlename, role]);

    return (
        <div className={classNames(classes.CreateCategory, {}, [className])}>
            <form onSubmit={sendCategory} className={classes.form}>
                <Input
                    size={InputSize.SMALL}
                    placeholder="Введите фамилию"
                    value={lastname}
                    onChange={setLastname}
                />
                <Input
                    size={InputSize.SMALL}
                    placeholder="Введите имя"
                    value={firstname}
                    onChange={setFirstname}
                />
                <Input
                    size={InputSize.SMALL}
                    placeholder="Введите отчество"
                    value={middlename}
                    onChange={setMiddlename}
                />
                <Input
                    size={InputSize.SMALL}
                    placeholder="Роль (admin | user)"
                    value={role}
                    onChange={setRole}
                />
                <Button
                    theme={ButtonTheme.PRIMARY}
                    type="submit"
                >
                    Добавить
                </Button>
            </form>
        </div>
    );
});
