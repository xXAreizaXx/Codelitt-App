'use client'

// UI
import AddReminderForm from './AddReminderForm'

// Components
import { TitleH5 } from '@components/Typography'

// Lib
import { formatDate } from '@lib/utils'

// Styles
import { DetailContainer, HeaderContainer } from '@styles/ui/add-reminder'

export default function AddReminderSection () {
    // Date
    const date = new Date()

    return (
        <DetailContainer>
            <HeaderContainer>
                <TitleH5>
                    Add reminder - {formatDate(date)}
                </TitleH5>
            </HeaderContainer>

            <AddReminderForm />
        </DetailContainer>
    )
}
