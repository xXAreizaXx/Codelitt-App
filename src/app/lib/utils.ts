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

// Get size of button
export function getSize (size: string = 'medium') {
    const SIZES: Record<string, string> = {
        large: '100%',
        medium: '12rem',
        small: '8rem'
    }

    return SIZES[size]
}
