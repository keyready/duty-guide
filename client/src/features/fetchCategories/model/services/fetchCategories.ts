import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Category } from 'features/fetchCategories/model/types/CategoriesSchema';
import { fetchCategoriesActions } from 'features/fetchCategories';

export const fetchCategories = createAsyncThunk<
    Category[],
    void,
    ThunkConfig<string>
>(
    'categories/fetchCategories',
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
        } = thunkAPI;

        try {
            const response = await extra.api.get<Category[]>(
                '/categories',
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCategoriesActions.setCategories(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
