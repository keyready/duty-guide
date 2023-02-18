import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { TheoryActions } from 'entities/Theory';

export interface createUserInitial {
    firstname: string;
    lastname: string;
    middlename: string;
    role: string;
    passwordSend: string;
}

export const createUser = createAsyncThunk<
    string,
    createUserInitial,
    ThunkConfig<string>
>(
    'category/createCategory',
    async (newUser, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<string>(
                '/admin/createUser',
                newUser,
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
