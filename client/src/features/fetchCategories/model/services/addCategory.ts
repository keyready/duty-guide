import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Category } from 'features/fetchCategories/model/types/CategoriesSchema';
import { fetchCategoriesActions } from 'features/fetchCategories';

export const addCategory = createAsyncThunk<
    void,
    Category,
    ThunkConfig<string>
>(
    'categories/addCategory',
    async (newCategory, thunkAPI) => {
        const {
            dispatch,
            extra,
        } = thunkAPI;

        try {
            const response = await extra.api.post(
                '/categories',
                newCategory,
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
