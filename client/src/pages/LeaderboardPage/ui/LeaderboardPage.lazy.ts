import { lazy } from 'react';

export const LeaderboardPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./LeaderboardPage'));
    }, 500);
}));
