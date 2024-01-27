interface Reminder {
    id: number
    color: string
    date: string
    description: string
    time: string
    title: string
}

interface ReminderState {
    reminders: Reminder[]
}
