import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Button as BButton, Badge, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { userLoginByLastname } from '../../model/services/userLoginByLastname';
import { UserForLogin } from '../../model/types/users';
import { getAllUsersError } from '../../model/selectors/usersForLoginSelector';
import classes from './UserCardForLogin.module.scss';

interface UserCardForLoginProps {
    className?: string;
    user: UserForLogin
}

export const UserCardForLogin = memo((props: UserCardForLoginProps) => {
    const {
        className,
        user,
    } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginError = useSelector(getAllUsersError);
    const [password, setPassword] = useState<string>('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const onUserSelect = useCallback(async (id: number) => {
        const response = await dispatch(userLoginByLastname({ id, password }));

        // @ts-ignore
        if (response.payload === 'Произошла ошибка, скорее всего неверный пароль для админа') {
            setShow(true);
        } else {
            navigate('/testing');
        }

        setPassword('');
    }, [dispatch, navigate, password]);

    return (
        <div className={classNames(classes.UserCardForLogin, {}, [className])}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Произошла ошибка</Modal.Title>
                </Modal.Header>
                <Modal.Body>Произошла ошибка, скорее всего неверный пароль для админа</Modal.Body>
                <Modal.Footer>
                    <BButton variant="warning" onClick={handleClose}>
                        Попробовать еще разок...
                    </BButton>
                </Modal.Footer>
            </Modal>

            <div className={classes.info}>
                <h3>{user.lastname}</h3>
                <h3>{user.firstname}</h3>
                <h3>{user.middlename}</h3>
                {user.role === 'admin' && <Badge bg="danger">ADMIN</Badge>}
            </div>
            {user.role === 'admin' && (
                <Input
                    size={InputSize.SMALL}
                    onChange={setPassword}
                    value={password}
                    placeholder="Пароль"
                />
            )}
            <Button
                disabled={!password && user.role === 'admin'}
                onClick={() => onUserSelect(user.id)}
                theme={ButtonTheme.BLUE}
            >
                Войти
            </Button>
        </div>
    );
});
