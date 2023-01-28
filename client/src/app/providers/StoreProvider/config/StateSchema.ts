import { CounterSchema } from 'entities/Counter';
import { loginSchema } from 'features/loginByUsername';
import { UserSchema } from 'entities/User';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { TaskSchema } from 'entities/Task/';
import { TheorySchema } from 'entities/Theory';
import { CategoriesSchema } from 'features/fetchCategories';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginByUsername: loginSchema;
    Task: TaskSchema;
    Theory: TheorySchema

    categories: CategoriesSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
