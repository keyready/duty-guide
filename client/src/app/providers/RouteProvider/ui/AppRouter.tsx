import { Suspense, useCallback, useMemo } from 'react';
import { AppRoutesProps, routerConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/UI/Loader/Loader';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';

const AppRouter = () => {
    const isAuth = useSelector(getAuthUser);
    console.log(isAuth);

    const routes = useMemo(() => Object.values(routerConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return !(route.adminOnly && isAuth?.role !== 'admin');
    }), [isAuth]);

    const renderWithSuspense = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<Loader />}>
                <div className="page">
                    {route.element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    console.log(routes);

    return (
        <Routes>
            {Object.values(routes).map(renderWithSuspense)}
        </Routes>
    );
};

export default AppRouter;
