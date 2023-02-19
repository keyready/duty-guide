import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getTest = (state: StateSchema) => state.Test.data;
export const getTestError = (state: StateSchema) => state.Test.error;
export const getTestIsLoading = (state: StateSchema) => state.Test.isLoading;
