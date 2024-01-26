// Components
import { TextParagraph, TitleH4 } from '@components/Typography'
import Divider from '@components/Divider'

// Constants
import { COLORS } from '@constants/colors'

// Icons
import { IconClockHour4, IconPencil } from '@tabler/icons-react'

// Styles
import { BtnEditReminder, CardContainer, CardInfo, CardTime, ColorIndicator } from '@styles/ui/styled'

export default function CardReminder () {
    return (
        <CardContainer>
            <ColorIndicator color={COLORS?.primary} />

            <CardInfo>
                <TextParagraph style={{ color: COLORS?.gray }}>Standups and DS&T</TextParagraph>
                <TextParagraph>
                    Codelitt Inc. is inviting to a Zoom meeting in which everyone as people from the company will participate.
                </TextParagraph>
            </CardInfo>

            <Divider direction='vertical'/>

            <CardTime>
                <IconClockHour4 color={COLORS?.gray} size={40}/>

                <TitleH4 style={{ color: COLORS?.gray }}>11:15</TitleH4>
            </CardTime>

            <BtnEditReminder>
                <IconPencil color={COLORS?.white} size={20}/>
            </BtnEditReminder>
        </CardContainer>
    )
}
