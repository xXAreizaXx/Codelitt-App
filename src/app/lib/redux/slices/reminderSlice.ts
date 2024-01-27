// Redux Toolkit
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ReminderState = {
    reminders: []
}

const reminderSlice = createSlice({
    name: 'reminder',
    initialState,
    reducers: {
        addReminder: (state, action: PayloadAction<Reminder>) => {
            state.reminders.push(action.payload)
        },
        removeReminder: (state, action: PayloadAction<number>) => {
            state.reminders = state.reminders.filter((reminder) => reminder.id !== action.payload)
        },
        editReminder: (state, action: PayloadAction<{ id: number, updatedData: Reminder }>) => {
            const { id, updatedData } = action.payload
            const index = state.reminders.findIndex((r) => r.id === id)

            if (index !== -1) {
                state.reminders = [
                    ...state.reminders.slice(0, index),
                    { ...state.reminders[index], ...updatedData },
                    ...state.reminders.slice(index + 1)
                ]
            }
        }
    }
})

export const { addReminder, removeReminder, editReminder } = reminderSlice.actions

export default reminderSlice.reducer
