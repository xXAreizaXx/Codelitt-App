'use client'
// Components
import { TextSpan, TitleH1, TitleH4 } from '@components/Typography'

// Redux
import { useSelector } from 'react-redux'

// Lib
import { type RootState } from '@lib/redux/store'

// UI
import Calendar from './Calendar'

// Constants
import { COLORS } from '@constants/colors'

// Styles
import { DetailCalendarContainer, DetailCalendarHeader } from '@styles/ui/styled'

export default function DetailCalendar () {
    // Constants
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December']

    // Date
    const date = new Date()

    // Redux
    const { month, year } = useSelector((state: RootState) => state?.calendar)

    return (
        <DetailCalendarContainer>
            <DetailCalendarHeader>
                <TitleH1 style={{ color: COLORS?.white }}>
                    {year ?? date.getFullYear()}
                </TitleH1>
                <TitleH4 style={{ color: COLORS?.white }}>
                    {months[(month - 1)]}
                </TitleH4>
            </DetailCalendarHeader>

            <Calendar />

            <TextSpan style={{ color: COLORS?.white }}>
                © 2022 Codelitt Inc All rights reserved
            </TextSpan>
        </DetailCalendarContainer>
    )
}
