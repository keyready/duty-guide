import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Task } from '../../types/task';
import { TaskActions } from '../../slices/TaskSlice';

export const fetchTaskById = createAsyncThunk<
    Task[],
    void,
    ThunkConfig<string>
    >(
        'task/fetchTaskData',
        async (_, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<Task[]>('/tasks');

                if (!response.data) {
                    throw new Error();
                }
                dispatch(TaskActions.setTasks(response.data));

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
