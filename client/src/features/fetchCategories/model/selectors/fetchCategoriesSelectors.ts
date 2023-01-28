import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCategoriesData = (state: StateSchema) => state.categories.data;
export const getCategoriesError = (state: StateSchema) => state.categories.error;
export const getCategoriesIsLoading = (state: StateSchema) => state.categories.isLoading;
