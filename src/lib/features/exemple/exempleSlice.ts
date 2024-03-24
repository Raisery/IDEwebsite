import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: valueState;
};
type valueState = {
    stateValue: string;
};
const initialState = {
    value: {
        stateValue: 'EXEMPLE',
    } as valueState,
} as InitialState;

export const exempleSlice = createSlice({
    name: 'exemple',
    initialState,
    reducers: {
        changeExemple: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    stateValue: action.payload,
                },
            };
        },
    },
});

export const { changeExemple } = exempleSlice.actions;
export default exempleSlice.reducer;
