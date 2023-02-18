import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UserForLogin } from 'pages/LoginPage/model/types/users';
import { UserForLoginActions } from 'pages/LoginPage/model/slice/UserForLoginSlice';

export const fetchUsersForLogin = createAsyncThunk<
    UserForLogin[],
    string,
    ThunkConfig<string>
>(
    'task/fetchTaskData',
    async (searching, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<UserForLogin[]>(
                '/loginUsers',
                { lastname: searching },
            );

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
