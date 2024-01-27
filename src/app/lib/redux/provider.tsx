'use client'

// Redux
import { Provider } from 'react-redux'

// Lib
import { store } from '@lib/redux/store'

export default function ReduxProvider ({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
