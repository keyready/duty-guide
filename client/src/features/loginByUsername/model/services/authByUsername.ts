import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UserForLoginActions } from 'pages/LoginPage/model/slice/UserForLoginSlice';
import { UserForLogin } from 'pages/LoginPage/model/types/users';

interface loginByUsernameProps {
    login: string;
    password: string;
}

export const authByUsername = createAsyncThunk<
    UserForLogin,
    loginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const {
                dispatch,
                extra,
            } = thunkAPI;

            try {
                const response = await extra.api.post<UserForLogin>(
                    '/login',
                    authData,
                );

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(UserForLoginActions.setChosenUser(response.data));
                // @ts-ignore
                extra.navigate('/testing');

                return response.data;
            } catch (e) {
                console.log(e);
                return thunkAPI.rejectWithValue('error');
            }
        },
    );
