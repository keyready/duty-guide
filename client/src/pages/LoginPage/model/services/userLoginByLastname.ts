import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UserForLoginActions, UserForLoginSlice } from 'pages/LoginPage/model/slice/UserForLoginSlice';
import { UserForLogin } from 'pages/LoginPage/model/types/users';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const userLoginByLastname = createAsyncThunk<
    UserForLogin,
    number,
    ThunkConfig<string>
>(
    'login/userLoginByLastname',
    async (id, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<UserForLogin>('/login', {
                id,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(UserForLoginActions.setChosenUser(response.data));
            // extra.navigate('/testing');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
