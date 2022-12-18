import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLogin = (state: StateSchema) => state.loginByUsername.login;
export const getPassword = (state: StateSchema) => state.loginByUsername.password;
export const getIsLoading = (state: StateSchema) => state.loginByUsername.isLoading;
export const getError = (state: StateSchema) => state.loginByUsername.error;
