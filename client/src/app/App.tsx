import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/RouteProvider';
import { Navbar } from 'widgets/Navbar/';
import { useDispatch } from 'react-redux';
import { UserActions } from 'entities/User';
import { Loader } from 'shared/UI/Loader/Loader';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserActions.initAuthData());
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
