import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getTheoryData = (state: StateSchema) => state.Theory.data;
export const getTheoryIsLoading = (state: StateSchema) => state.Theory.isLoading;
export const getTheoryError = (state: StateSchema) => state.Theory.error;
