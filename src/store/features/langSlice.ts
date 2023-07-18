import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    value: LangState
}
type LangState = {
    currentLang: string
}
const initialState = {
    value: {
        currentLang: 'EN',
    } as LangState,
} as InitialState

export const about = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeLang: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    currentLang: action.payload,
                },
            }
        },
    },
})

export const { changeLang } = about.actions
export default about.reducer
