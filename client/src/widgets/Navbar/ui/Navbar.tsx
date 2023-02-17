import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button } from 'shared/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from 'entities/User';
import { AppLink } from 'shared/UI/AppLink/AppLink';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authData = useSelector(getAuthUser);

    const onLogout = useCallback(() => {
        document.location.reload();
        navigate('/');
        dispatch(UserActions.logout());
    }, [dispatch, navigate]);

    if (authData) {
        return (
            <div className={classNames(classes.Navbar, {}, [className])}>
                <div>
                    <AppLink className={classes.main_link} to="/">Главная</AppLink>
                    <AppLink className={classes.main_link} to="/theory">Теория</AppLink>
                    <AppLink to="/testing">Тестирование</AppLink>
                    {authData.role === 'admin'
                        ? (<AppLink className={classes.admin_link} to="/adminka">Админка</AppLink>)
                        : ''}
                </div>
                <Button
                    onClick={onLogout}
                >
                    Выйти
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div>
                <AppLink to="/">Главная</AppLink>
            </div>
            <Button
                onClick={() => navigate('/login')}
            >
                Авторизация
            </Button>
        </div>
    );
});
