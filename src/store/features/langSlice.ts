import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FRLines from '../../lang/fr.json';
import ENLines from '../../lang/en.json';

const TRANSLATIONS: { [key: string]: typeof ENLines } = {
    FR: FRLines,
    EN: ENLines,
};

export enum LANGUAGES {
    EN = 'EN',
    FR = 'FR',
}

type InitialState = {
    value: LangState;
};
type LangState = {
    currentLang: string;
    translation: typeof ENLines;
};
const initialState = {
    value: {
        currentLang: LANGUAGES.EN,
        translation: TRANSLATIONS[LANGUAGES.EN],
    } as LangState,
} as InitialState;

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    currentLang: action.payload,
                    translation: TRANSLATIONS[action.payload],
                },
            };
        },
    },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
