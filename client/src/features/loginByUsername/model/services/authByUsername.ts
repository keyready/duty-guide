import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface loginByUsernameProps {
    login: string;
    password: string;
}

export const authByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const {
                dispatch,
                extra,
            } = thunkAPI;

            console.warn(authData);
            try {
                const response = await extra.api.post<User>(
                    '/login',
                    authData,
                );

                console.log(response.data);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(UserActions.setAuthData(response.data));
                // @ts-ignore
                extra.navigate('/testing');

                return response.data;
            } catch (e) {
                console.log(e);
                return thunkAPI.rejectWithValue('error');
            }
        },
    );
