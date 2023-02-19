import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button } from 'shared/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from 'entities/User';
import { AppLink } from 'shared/UI/AppLink/AppLink';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import { RoutePath, routerConfig } from 'shared/config/routeConfig/routeConfig';
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
                <div className={classes.links}>
                    <AppLink to={RoutePath.main}>Главная</AppLink>
                    <AppLink to={RoutePath.theory}>Теория</AppLink>
                    <AppLink to={RoutePath.testing}>Тестирование</AppLink>
                    <AppLink to={RoutePath.profile + authData.id}>Профиль</AppLink>
                    {authData.role === 'admin'
                        ? (<AppLink to={RoutePath.admin}>Админка</AppLink>)
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
