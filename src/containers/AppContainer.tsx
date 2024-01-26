'use client'

// Styles
import { AppMain } from '@styles/containers'

export default function AppContainer ({ children }: { children: React.ReactNode }) {
    return (
        <AppMain>
            {children}
        </AppMain>
    )
}
