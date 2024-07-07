import { createSlice } from '@reduxjs/toolkit';

export interface ISliceDataState {
    data: any;
    isLoading: boolean;
}

const sliceData = createSlice({
    name: 'data',
    initialState: {
        data: null,
        isLoading: true,
    },
    reducers: {
        setStateData(state: ISliceDataState, action: { payload: any }) {
            state.data = action.payload;
            state.isLoading = false;
        },
    },
});

export const sliceDataActions = sliceData.actions;
export default sliceData;
