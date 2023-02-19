import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from 'entities/Task';
import { createTest } from '../service/createTest';
import { Test, TestSchema } from '../type/Test';

const initialState: TestSchema = {
    data: {
        test: [],
        amount: 0,
    },
    isLoading: false,
    error: '',
};

export const CreateTestSlice = createSlice({
    name: 'CreateTestSlice',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<Task[]>) => {
            state.data.test = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(createTest.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        })
        .addCase(createTest.fulfilled, (state, action: PayloadAction<Task[]>) => {
            state.data.test = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createTest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = String(action.error);
        }),

});

export const { actions: CreateTestActions } = CreateTestSlice;
export const { reducer: CreateTestReducer } = CreateTestSlice;
