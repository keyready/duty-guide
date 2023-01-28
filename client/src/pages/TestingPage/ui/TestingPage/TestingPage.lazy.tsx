import { lazy } from 'react';

export const TestingPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./TestingPage'));
    }, 500);
}));
