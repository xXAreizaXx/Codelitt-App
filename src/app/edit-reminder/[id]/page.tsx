// UI
import EditReminderSection from '@ui/edit-reminder/EditReminderSection'

export default function AddReminderPage ({ params }: { params: { id: string } }) {
    // Params
    const id = params.id

    return <EditReminderSection id={id} />
}
