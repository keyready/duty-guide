import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getAllUsers = (state: StateSchema) => state.UserForLogin.allUsers;
export const getAuthUser = (state: StateSchema) => state.UserForLogin.selectedUser;
export const getAllUsersIsLoading = (state: StateSchema) => state.UserForLogin.isLoading;
export const getAllUsersError = (state: StateSchema) => state.UserForLogin.error;
