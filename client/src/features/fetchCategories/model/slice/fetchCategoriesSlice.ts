import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategories } from 'features/fetchCategories/model/services/fetchCategories';
import { CategoriesSchema, Category } from 'features/fetchCategories/model/types/CategoriesSchema';
import { addCategory } from 'features/fetchCategories/model/services/addCategory';

const initialState: CategoriesSchema = {
    data: [],
    error: undefined,
    isLoading: false,
};

export const fetchCategoriesSlice = createSlice({
    name: 'fetchCategoriesSlice',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })

            .addCase(addCategory.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: fetchCategoriesActions } = fetchCategoriesSlice;
export const { reducer: fetchCategoriesReducer } = fetchCategoriesSlice;
