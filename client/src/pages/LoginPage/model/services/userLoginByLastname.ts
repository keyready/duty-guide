import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UserForLoginActions } from 'pages/LoginPage/model/slice/UserForLoginSlice';
import { UserForLogin } from 'pages/LoginPage/model/types/users';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const userLoginByLastname = createAsyncThunk<
    UserForLogin,
    { id: number, password?: string },
    ThunkConfig<string>
>(
    'login/userLoginByLastname',
    async ({ id, password }, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<UserForLogin>('/login', {
                id,
                password,
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
            return rejectWithValue('Произошла ошибка, скорее всего неверный пароль для админа');
        }
    },
);
