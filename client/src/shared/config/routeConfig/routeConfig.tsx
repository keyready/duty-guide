import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { TestingPage } from 'pages/TestingPage';
import { NotFound } from 'pages/NotFound';
import { TheoryPage } from 'pages/TheoryPage';
import { AdminPage } from 'pages/AdminPage';
import { ProfilePage } from 'pages/ProfilePage';
import { LeaderboardPage } from 'pages/LeaderboardPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    adminOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    TESTING = 'testing',
    THEORY = 'theory',
    ADMIN = 'admin',
    PROFILE = 'profile',
    LEADERBOARD = 'leaderboard',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.TESTING]: '/testing',
    [AppRoutes.THEORY]: '/theory',
    [AppRoutes.ADMIN]: '/adminka',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.LEADERBOARD]: '/leader_board',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.TESTING]: {
        path: RoutePath.testing,
        element: <TestingPage />,
        authOnly: true,
    },
    [AppRoutes.THEORY]: {
        path: RoutePath.theory,
        element: <TheoryPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        authOnly: true,
        adminOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.LEADERBOARD]: {
        path: RoutePath.leaderboard,
        element: <LeaderboardPage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
