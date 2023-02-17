import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginSchema } from '../types/loginSchema';
import { authByUsername } from '../services/authByUsername';

const initialState: loginSchema = {
    login: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginByUsernameSlice = createSlice({
    name: 'loginByUsernameSlice',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(authByUsername.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: loginActions } = loginByUsernameSlice;
export const { reducer: loginReducer } = loginByUsernameSlice;
