import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UserForLogin } from 'pages/LoginPage/model/types/users';
import { UserForLoginActions } from 'pages/LoginPage/model/slice/UserForLoginSlice';

export const fetchUsersForLogin = createAsyncThunk<
    UserForLogin[],
    void,
    ThunkConfig<string>
>(
    'task/fetchTaskData',
    async (_, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<UserForLogin[]>('/loginUsers');

            if (!response.data) {
                throw new Error();
            }
            dispatch(UserForLoginActions.setUsersForLogin(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
