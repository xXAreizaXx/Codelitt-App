'use client'

// NextJS
import { useRouter } from 'next/navigation'

// Redux
import { useSelector } from 'react-redux'

// Components
import { BtnPrimary } from '@components/Buttons'
import { TextParagraph, TitleH5 } from '@components/Typography'
import Empty from '@components/Empty'

// Constants
import { COLORS } from '@constants/colors'

// Lib
import { formatDate } from '@lib/utils'
import { type RootState } from '@lib/redux/store'

// UI
import CardReminder from './CardReminder'

// Styles
import { DetailContainer, HeaderContainer, CardDetailContainer } from '@styles/ui/styled'

export default function DetailReminder () {
    // Navigation
    const { push } = useRouter()

    // Redux
    const { selectedDate } = useSelector((state: RootState) => state?.calendar)

    const reminders = useSelector((state: RootState) => state?.reminder?.reminders)

    console.log('Reminders: ', reminders)

    if (reminders?.length === 0) {
        return (
            <DetailContainer>
                <HeaderContainer>
                    <TitleH5>
                        {formatDate(selectedDate)}
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

                <Empty />
            </DetailContainer>
        )
    }

    return (
        <DetailContainer>
            <HeaderContainer>
                <TitleH5>
                    {formatDate(selectedDate)}
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
                {reminders?.map((reminder) => (
                    <CardReminder key={reminder?.id} reminder={reminder} />
                ))}
            </CardDetailContainer>
        </DetailContainer>
    )
}
