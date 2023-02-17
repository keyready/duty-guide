import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { UserForLogin } from 'pages/LoginPage/model/types/users';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { userLoginByLastname } from 'pages/LoginPage/model/services/userLoginByLastname';
import { useNavigate } from 'react-router-dom';
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

    const onUserSelect = useCallback((id: number) => {
        dispatch(userLoginByLastname(id));
    }, [dispatch]);

    return (
        <div className={classNames(classes.UserCardForLogin, {}, [className])}>
            <div className={classes.info}>
                <h3>{user.lastname}</h3>
                <h3>{user.firstname}</h3>
                <h3>{user.middlename}</h3>
            </div>
            <Button
                onClick={() => onUserSelect(user.id)}
                theme={ButtonTheme.BLUE}
            >
                Войти
            </Button>
        </div>
    );
});
