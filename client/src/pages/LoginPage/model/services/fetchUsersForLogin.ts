import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UserForLogin } from 'pages/LoginPage/model/types/users';
import { UserForLoginActions } from 'pages/LoginPage/model/slice/UserForLoginSlice';

interface Order {
    sortBy: string,
    order: 'ASC' | 'DESC'
}
export interface props {
    lastname: string,
    order: Order;
}

export const fetchUsersForLogin = createAsyncThunk<
    UserForLogin[],
    props,
    ThunkConfig<string>
>(
    'task/fetchTaskData',
    async (params, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<UserForLogin[]>(
                '/loginUsers',
                params,
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
