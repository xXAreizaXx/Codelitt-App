'use client'

// NextJS
import { useRouter } from 'next/navigation'

// Components
import { BtnPrimary } from '@components/Buttons'
import { TextParagraph, TitleH5 } from '@components/Typography'
// import Empty from '@components/Empty'

// Constants
import { COLORS } from '@constants/colors'

// Lib
import { formatDate } from '@lib/utils'

// UI
import CardReminder from './CardReminder'

// Styles
import { DetailContainer, HeaderContainer, CardDetailContainer } from '@styles/ui/styled'

export default function DetailReminder () {
    // Navigation
    const { push } = useRouter()

    // Date
    const date = new Date()

    return (
        <DetailContainer>
            <HeaderContainer>
                <TitleH5>
                    {formatDate(date)}
                </TitleH5>

                <BtnPrimary
                    style={{ background: COLORS?.linearGradient?.secondary }}
                    onClick={() => { push('/add-reminder') }}
                >
                    <TextParagraph style={{ color: COLORS?.white }}>
                        Add reminder
                    </TextParagraph>
                </BtnPrimary>

            </HeaderContainer>

            <CardDetailContainer>
                <CardReminder />

                <CardReminder />

                <CardReminder />

                <CardReminder />

                <CardReminder />

                <CardReminder />
            </CardDetailContainer>

            {/* <Empty /> */}
        </DetailContainer>
    )
}
