import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { CreateTestActions } from 'pages/TestingPage';
import { Task } from 'entities/Task';
import { Test } from '../type/Test';

export interface createTestProps {
    categories: number[];
    tasksAmount: number;
}
export const createTest = createAsyncThunk<
    Task[],
    createTestProps,
    ThunkConfig<string>
>(
    'test/createTest',
    async (params, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<Task[]>(
                '/createTest',
                params,
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(CreateTestActions.setTest(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
