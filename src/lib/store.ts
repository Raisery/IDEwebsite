import { configureStore } from '@reduxjs/toolkit';
import exempleReducer from './features/exemple/exempleSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            exemple: exempleReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
