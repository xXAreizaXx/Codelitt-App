// NextJS
import { useRouter } from 'next/navigation'

// Components
import { TextParagraph, TitleH4 } from '@components/Typography'
import Divider from '@components/Divider'

// Constants
import { COLORS } from '@constants/colors'

// Icons
import { IconClockHour4, IconPencil } from '@tabler/icons-react'

// Styles
import { BtnEditReminder, CardContainer, CardInfo, CardTime, ColorIndicator } from '@styles/ui/styled'

export default function CardReminder ({ reminder }: { reminder: Reminder }) {
    // Navigation
    const { push } = useRouter()

    return (
        <CardContainer>
            <ColorIndicator color={reminder?.color} />

            <CardInfo>
                <TextParagraph style={{ color: COLORS?.gray }}>{reminder?.title}</TextParagraph>
                <TextParagraph>{reminder?.description}</TextParagraph>
            </CardInfo>

            <Divider direction='vertical'/>

            <CardTime>
                <IconClockHour4 color={COLORS?.gray} size={40}/>

                <TitleH4 style={{ color: COLORS?.gray }}>{reminder?.time}</TitleH4>
            </CardTime>

            <BtnEditReminder onClick={() => { push(`/edit-reminder/${reminder?.id}`) }}>
                <IconPencil color={COLORS?.white} size={20}/>
            </BtnEditReminder>
        </CardContainer>
    )
}
