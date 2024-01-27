// calendarSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CalendarState {
    selectedDate: Date
    day: number
    month: number
    year: number
}

const initialState: CalendarState = {
    selectedDate: new Date(),
    day: 1,
    month: 1,
    year: 2024
}

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        selectDate: (state, action: PayloadAction<Date>) => {
            const selectedDate = action.payload
            state.selectedDate = selectedDate
            state.day = selectedDate.getDate()
            state.month = selectedDate.getMonth() + 1 // Sumamos 1 porque los meses comienzan desde 0
            state.year = selectedDate.getFullYear()
        }
    }
})

export const { selectDate } = calendarSlice.actions

export default calendarSlice.reducer
