import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { TheoryActions } from 'entities/Theory';

export const createCategory = createAsyncThunk<
    string,
    { name: string },
    ThunkConfig<string>
>(
    'category/createCategory',
    async (newCategory, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<string>(
                '/admin/createCategory',
                newCategory,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
