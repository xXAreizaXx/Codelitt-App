'use client'

// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'

// Slices
import counterReducer from './slices/counterSlice'
import calendarReducer from './slices/calendarSlice'
import reminderReducer from './slices/reminderSlice'

export const store = configureStore({
    reducer: {
        calendar: calendarReducer,
        counter: counterReducer,
        reminder: reminderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
