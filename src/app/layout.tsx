// NextJS
import { Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'

// Lib
import ReduxProvider from '@lib/redux/provider'
import StyledComponentsRegistry from '@lib/registry'

// UI
import AppLogo from '@ui/AppLogo'
import DetailCalendar from '@ui/DetailCalendar'

// Containers
import AppContainer from '@containers/AppContainer'
import DetailCalendarContainer from '@containers/CalendarContainer'

// External Dependencies
import { Toaster } from 'sonner'

// Styles
import './globals.css'

// Fonts
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})

// Metadata
export const metadata: Metadata = {
    description: 'Freelance Software Development by Jorge Areiza',
    title: 'Codelitt | App'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={openSans?.className}>
                <ReduxProvider>
                    <StyledComponentsRegistry>
                        <AppContainer>
                            <AppLogo />

                            <DetailCalendarContainer>
                                {children}

                                <DetailCalendar />
                            </DetailCalendarContainer>
                        </AppContainer>
                    </StyledComponentsRegistry>
                </ReduxProvider>

                <Toaster position="top-center" richColors />
            </body>
        </html>
    )
}
