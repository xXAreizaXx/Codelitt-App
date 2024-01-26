'use client'

// UI
import EditReminderForm from './EditReminderForm'

// Components
import { TitleH5 } from '@components/Typography'

// Lib
import { formatDate } from '@lib/utils'

// Styles
import { DetailContainer, HeaderContainer } from '@styles/ui/edit-reminder'

export default function EditReminderSection () {
    // Date
    const date = new Date()

    return (
        <DetailContainer>
            <HeaderContainer>
                <TitleH5>
                    Edit reminder - {formatDate(date)}
                </TitleH5>
            </HeaderContainer>

            <EditReminderForm />
        </DetailContainer>
    )
}
