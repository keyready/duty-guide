import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { loginReducer } from 'features/loginByUsername';
import { UserReducer } from 'entities/User';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';
import { TaskReducer } from 'entities/Task';
import { TheoryReducer } from 'entities/Theory';
import { fetchCategoriesReducer } from 'features/fetchCategories';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
        loginByUsername: loginReducer,
        Task: TaskReducer,
        Theory: TheoryReducer,
        categories: fetchCategoriesReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: IS_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });
}
