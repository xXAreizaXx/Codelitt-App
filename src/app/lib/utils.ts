// Format date to be more readable
export function formatDate (date: Date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const dayOfWeek = daysOfWeek[date.getDay()]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${dayOfWeek}, ${month} ${day}, ${year}`
}

export function formatFilterDate (date: Date) {
    const inputDate = new Date(date)

    const year = inputDate.getFullYear()
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0') // Agregamos 1 porque los meses comienzan desde 0
    const day = inputDate.getDate().toString().padStart(2, '0')
    const outputDateString = `${year}-${month}-${day}`

    return outputDateString
}

// Get size of button
export function getSize (size: string = 'medium') {
    const SIZES: Record<string, string> = {
        large: '100%',
        medium: '12rem',
        small: '8rem'
    }

    return SIZES[size]
}
