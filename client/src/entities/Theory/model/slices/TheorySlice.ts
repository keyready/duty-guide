import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createTheory } from 'entities/Theory/model/services/createTheory/createTheory';
import { fetchTheory } from '../services/fetchTheory/fetchTheory';
import { Theory } from '../types/Theory';
import { TheorySchema } from '../types/TheorySchema';

const initialState: TheorySchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const TheorySlice = createSlice({
    name: 'TheorySlice',
    initialState,
    reducers: {
        setTheoryData: (state, action: PayloadAction<Theory[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: ((builder) => {
        builder
            .addCase(fetchTheory.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTheory.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTheory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(createTheory.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createTheory.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(createTheory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: TheoryActions } = TheorySlice;
export const { reducer: TheoryReducer } = TheorySlice;
