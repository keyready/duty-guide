import { classNames } from 'shared/lib/classNames/classNames';
import {
    FormEvent, memo, useCallback, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { createUser } from 'entities/User/model/services/UserService';
import { Form } from 'react-bootstrap';
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
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();

    const sendCategory = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const role = isAdmin ? 'admin' : 'user';
        const passwordSend = isAdmin ? password : '';

        dispatch(createUser({
            firstname,
            middlename,
            lastname,
            role,
            passwordSend,
        }));
        setLastname('');
        setFirstname('');
        setMiddlename('');
        setPassword('');
    }, [dispatch, firstname, isAdmin, lastname, middlename, password]);

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

                <Form
                    className={classes.adminForm}
                >
                    <p>Админ?</p>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        onChange={() => setIsAdmin((prev) => !prev)}
                    />
                </Form>
                {isAdmin && (
                    <Input
                        size={InputSize.SMALL}
                        placeholder="Пароль"
                        value={password}
                        onChange={setPassword}
                    />
                )}

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
