import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/RouteProvider';
import { Navbar } from 'widgets/Navbar/';
import { useDispatch } from 'react-redux';
import { UserForLoginActions } from 'pages/LoginPage/model/slice/UserForLoginSlice';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserForLoginActions.initLogonUser());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<div />}>
                <Navbar />
                <div className="page__wrapper">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
