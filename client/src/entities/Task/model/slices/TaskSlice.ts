import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks } from '../services/fetchTasks/fetchTasks';
import { Task } from '../types/task';
import { TaskSchema } from '../types/TaskSchema';
import { createTask } from '../services/createTask/createTask';

const initialState: TaskSchema = {
    data: [],
    isLoading: false,
    error: undefined,
};

export const TaskSlice = createSlice({
    name: 'TaskSlice',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchTasks.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(createTask.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(createTask.fulfilled, (state) => {
            state.isLoading = false;
            state.error = undefined;
        })
        .addCase(createTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const { actions: TaskActions } = TaskSlice;
export const { reducer: TaskReducer } = TaskSlice;
