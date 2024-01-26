'use client'
// Components
import { TextSpan, TitleH1, TitleH4 } from '@components/Typography'

// UI
import Calendar from './Calendar'

// Constants
import { COLORS } from '@constants/colors'

// Styles
import { DetailCalendarContainer, DetailCalendarHeader } from '@styles/ui/styled'

export default function DetailCalendar () {
    return (
        <DetailCalendarContainer>
            <DetailCalendarHeader>
                <TitleH1 style={{ color: COLORS?.white }}>
                    2022
                </TitleH1>
                <TitleH4 style={{ color: COLORS?.white }}>
                    August
                </TitleH4>
            </DetailCalendarHeader>

            <Calendar />

            <TextSpan style={{ color: COLORS?.white }}>
                © 2022 Codelitt Inc All rights reserved
            </TextSpan>
        </DetailCalendarContainer>
    )
}
