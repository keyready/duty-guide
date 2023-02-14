import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export const createTask = createAsyncThunk<
    string,
    any,
    ThunkConfig<string>
>(
    'task/createTask',
    async (newTask, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<string>(
                '/admin/createTask',
                newTask,
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
