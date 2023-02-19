import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { CreateTestActions } from 'pages/TestingPage';
import { Task } from 'entities/Task';

export interface updateStatisticsProps {
    id: number,
    newSolves: number,
    newRightSolves: number
}
export const updateStatistics = createAsyncThunk<
    string,
    updateStatisticsProps,
    ThunkConfig<string>
>(
    'test/updateStatistics',
    async (params, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<string>(
                '/updateStatistics',
                params,
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
