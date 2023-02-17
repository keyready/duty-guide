import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getTasksData = (state: StateSchema) => state.Task.data;
export const getTasksAmount = (state: StateSchema) => state.Task.tasksAmount;
export const getTasksAmountIsLoading = (state: StateSchema) => state.Task.tasksAmountIsLoading;
export const getTasksIsLoading = (state: StateSchema) => state.Task.isLoading;
export const getTasksError = (state: StateSchema) => state.Task.error;
