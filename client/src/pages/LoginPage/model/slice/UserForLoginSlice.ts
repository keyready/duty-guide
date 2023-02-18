import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserForLogin, UserForLoginSchema } from 'pages/LoginPage/model/types/users';
import { fetchUsersForLogin } from 'pages/LoginPage/model/services/fetchUsersForLogin';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { act } from 'react-dom/test-utils';

const initialState: UserForLoginSchema = {
    allUsers: undefined,
    selectedUser: undefined,
    isLoading: false,
    error: undefined,
};

export const UserForLoginSlice = createSlice({
    name: 'UserForLoginSlice',
    initialState,
    reducers: {
        setUsersForLogin: (state, action: PayloadAction<UserForLogin[]>) => {
            state.allUsers = action.payload;
        },
        setChosenUser: (state, action: PayloadAction<UserForLogin>) => {
            state.selectedUser = action.payload;
        },
        initLogonUser: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.selectedUser = JSON.parse(user);
            }
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchUsersForLogin.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchUsersForLogin.fulfilled, (state, action: PayloadAction<UserForLogin[]>) => {
            state.isLoading = false;
            state.error = undefined;
            state.allUsers = action.payload;
        })
        .addCase(fetchUsersForLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = String(action.error);
        }),

});

export const { actions: UserForLoginActions } = UserForLoginSlice;
export const { reducer: UserForLoginReducer } = UserForLoginSlice;
