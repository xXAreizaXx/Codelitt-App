'use client'

// Styles
import { DetailCalendarMain } from '@styles/containers'

export default function DetailCalendarContainer ({ children }: { children: React.ReactNode }) {
    return (
        <DetailCalendarMain>
            {children}
        </DetailCalendarMain>
    )
}
