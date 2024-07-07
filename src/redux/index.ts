import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sliceData from './SliceData';

const store = configureStore({
    reducer: combineReducers({
        data: sliceData.reducer,
    }),
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
