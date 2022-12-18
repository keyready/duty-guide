import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { Input } from 'shared/UI/Input/Input';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    getError,
    getIsLoading,
    getLogin,
    getPassword,
    authByUsername,
    loginActions,
} from 'features/loginByUsername';
import { useNavigate } from 'react-router-dom';
import classes from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

const LoginPage = memo((props: LoginPageProps) => {
    const {
        className,
    } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = useSelector(getLogin);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onButtonClick = useCallback(() => {
        dispatch(authByUsername({ login, password }));
    }, [dispatch, login, password]);

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className={classNames(classes.LoginPage, {}, [className])}
        >
            <ContentWrapper title="Авторизация">
                {error && (
                    <h3 className={classes.authError}>Ошибка авторизации</h3>
                )}
                <Input
                    type="text"
                    autoFocus
                    placeholder="Ваша фамилия"
                    value={login}
                    onChange={onChangeLogin}
                />
                <Input
                    type="password"
                    placeholder="Ваш пароль"
                    value={password}
                    onChange={onChangePassword}
                />
                <Button
                    theme={ButtonTheme.BLUE}
                    className={classes.button}
                    onClick={onButtonClick}
                    disabled={isLoading}
                >
                    Войти
                </Button>
            </ContentWrapper>
        </form>
    );
});

export default LoginPage;
