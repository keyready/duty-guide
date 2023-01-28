import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { TheoryActions } from 'entities/Theory/model/slices/TheorySlice';
import { Theory } from '../../types/Theory';

export const fetchTheory = createAsyncThunk<
    Theory[],
    void,
    ThunkConfig<string>
    >(
        'theory/fetchTheory',
        async (_, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<Theory[]>('/theory');

                if (!response.data) {
                    throw new Error();
                }
                dispatch(TheoryActions.setTheoryData(response.data));

                console.log(response.data);

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
