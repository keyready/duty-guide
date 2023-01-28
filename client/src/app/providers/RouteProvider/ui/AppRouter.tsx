import { Suspense, useCallback, useMemo } from 'react';
import { AppRoutesProps, routerConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { Loader } from 'shared/UI/Loader/Loader';

const AppRouter = () => {
    const isAuth = useSelector(getAuthData);

    const routes = useMemo(() => Object.values(routerConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        if (route.adminOnly && isAuth?.role !== 'admin') {
            return false;
        }
        return true;
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

    return (
        <Routes>
            {Object.values(routes).map(renderWithSuspense)}
        </Routes>
    );
};

export default AppRouter;
