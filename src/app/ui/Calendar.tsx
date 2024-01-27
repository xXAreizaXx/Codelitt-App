// ReactJS
import { Fragment, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import { TextParagraph, TitleH4, TitleH6 } from '@components/Typography'

// Lib
import { selectDate } from '@lib/redux/slices/calendarSlice'
import { type AppDispatch, type RootState } from '@lib/redux/store'

// Constants
import { COLORS } from '@constants/colors'

// Icons
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// Styles
import { CalendarCell, CalendarContainer, CalendarGrid, CalendarHeader, EmptyCell } from '@styles/ui/styled'
import { formatFilterDate } from '@lib/utils'

export default function Calendar () {
    // Constants
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // States
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [month, setMonth] = useState<number>(new Date().getMonth())

    // Redux
    const { selectedDate } = useSelector((state: RootState) => state?.calendar)

    const reminders = useSelector((state: RootState) => state?.reminder?.reminders)

    const dispatch: AppDispatch = useDispatch()

    // Functions
    const getDaysInMonth = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const days = []

        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null)
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    const handleDateClick = (date: Date) => {
        dispatch(selectDate(date))
    }

    const changeDate = (increment: number, type: string) => {
        if (type === 'month') {
            const newMonth = month + increment

            if (newMonth < 0) {
                setYear((prevYear) => prevYear - 1)
                setMonth(11)
            } else if (newMonth > 11) {
                setYear((prevYear) => prevYear + 1)
                setMonth(0)
            } else {
                setMonth(newMonth)
            }
        } else if (type === 'year') {
            setYear((prevYear) => prevYear + increment)
        }
    }

    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarCell onClick={() => { changeDate(-1, 'month') }}>
                    <IconChevronLeft color={COLORS?.white} />
                </CalendarCell>

                <TitleH4 style={{ color: COLORS?.white }}>&#183;</TitleH4>

                <CalendarCell onClick={() => { changeDate(1, 'month') }}>
                    <IconChevronRight color={COLORS?.white} />
                </CalendarCell>
            </CalendarHeader>

            <CalendarGrid>
                {daysOfWeek.map((day) => (
                    <TitleH6 key={day} style={{ textAlign: 'center', color: COLORS?.white }}>
                        {day}
                    </TitleH6>
                ))}

                {getDaysInMonth(year, month).map((date: Date | null, index: number) => {
                    const isEmpty = reminders
                        ?.filter((reminder) => reminder?.date === formatFilterDate(date ?? new Date()))
                        ?.length === 0

                    return (
                        <Fragment key={index}>
                            {date !== null
                                ? <CalendarCell
                                    empty={isEmpty}
                                    onClick={() => { handleDateClick(date) }}
                                    selected={date.toDateString() === selectedDate?.toDateString()}
                                >
                                    <TextParagraph style={{ textAlign: 'center', color: COLORS?.white }}>
                                        {date.getDate()}
                                    </TextParagraph>
                                    <div className="dot" />
                                </CalendarCell>
                                : <EmptyCell />}
                        </Fragment>
                    )
                })}
            </CalendarGrid>
        </CalendarContainer>
    )
};
