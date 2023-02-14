import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/CategorySchema';
import { createCategory } from '../services/CategoryService';

const initialState: CategorySchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const CategorySlice = createSlice({
    name: 'CategorySlice',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createCategory.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: CategoryActions } = CategorySlice;
export const { reducer: CategoryReducer } = CategorySlice;
