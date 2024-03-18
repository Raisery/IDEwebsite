import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FRLines from '../../lang/fr.json';
import ENLines from '../../lang/en.json';
import aboutEN from '../../lang/about_en.json';
import aboutFR from '../../lang/about_fr.json';

const TRANSLATIONS: { [key: string]: typeof ENLines } = {
    FR: FRLines,
    EN: ENLines,
};

const ABOUT_TRANSLATION: { [key: string]: typeof aboutEN } = {
    FR: aboutFR,
    EN: aboutEN,
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
    aboutTranslation: typeof aboutEN;
};
const initialState = {
    value: {
        currentLang: LANGUAGES.EN,
        translation: TRANSLATIONS[LANGUAGES.EN],
        aboutTranslation: ABOUT_TRANSLATION[LANGUAGES.EN],
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
                    aboutTranslation: ABOUT_TRANSLATION[action.payload],
                },
            };
        },
    },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
