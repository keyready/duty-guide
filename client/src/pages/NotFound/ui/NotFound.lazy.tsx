import { lazy } from 'react';

export const NotFoundLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./NotFound'));
    }, 500);
}));
