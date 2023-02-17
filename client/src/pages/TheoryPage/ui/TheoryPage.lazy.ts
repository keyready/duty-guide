import { lazy } from 'react';

export const TheoryPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./TheoryPage'));
    }, 500);
}));
