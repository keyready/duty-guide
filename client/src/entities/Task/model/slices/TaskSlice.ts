import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTaskById } from '../services/fetchTaskById/fetchTaskById';
import { Task } from '../types/task';
import { TaskSchema } from '../types/TaskSchema';

const initialState: TaskSchema = {
    data: undefined,
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
        .addCase(fetchTaskById.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<Task[]>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
        })
        .addCase(fetchTaskById.rejected, (state) => {
            state.isLoading = false;
            state.error = 'action.payload';
        }),

});

export const { actions: TaskActions } = TaskSlice;
export const { reducer: TaskReducer } = TaskSlice;
