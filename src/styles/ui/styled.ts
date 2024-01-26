// Constants
import { COLORS } from '@constants/colors'

// Styled Components
import styled from 'styled-components'

export const DetailContainer = styled.div`
    align-items: center;
    background-color: ${COLORS?.white};
    border-radius: 40px 0px 0px 40px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    padding: 20px;
    width: 60%;
`

export const DetailCalendarContainer = styled.section`
    align-items: center;
    background: ${COLORS?.linearGradient?.primary};
    border-radius: 0px 40px 40px 0px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: space-around;
    padding: 20px;
    width: 40%;
`

export const DetailCalendarHeader = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const CalendarContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 300px;
`

export const CalendarHeader = styled.header`
    align-items: center;
    display: flex;
    gap: 5px;
`

export const CalendarGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(7, 1fr);
`

export const CalendarCell = styled.button<{ selected?: boolean }>`
    align-items: center;
    background: ${({ selected = false }) => (selected ? COLORS?.linearGradient?.secondary : 'transparent')};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    position: relative;
    width: 30px;

    &:hover {
        background: ${COLORS?.gray};
    }

    .dot {
        background-color: #00ff00;
        border-radius: 50%;
        height: 6px;
        position: absolute;
        right: 0;
        top: 0;
        width: 6px;
    }
`

export const EmptyCell = styled(CalendarCell)`
    cursor: default;

    &:hover {
        background-color: transparent;
    }
`

export const CardContainer = styled.div`
    align-items: center;
    background-color: ${COLORS?.white};
    border-radius: 16px;
    box-shadow: 0px 4px 28px 2px #D1DCF0;
    display: flex;
    gap: 1rem;
    height: 140px;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    width: 100%;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    justify-content: center;
    width: 100%;
`

export const CardTime = styled.div`
    align-items: center;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
`

export const ColorIndicator = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    border-radius: 100px;
    height: 100%;
    width: 20px;
`

export const CardDetailContainer = styled.div`
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    height: 100%;
    overflow-y: auto;
    padding: 14px;
`

export const BtnEditReminder = styled.button`
    align-items: center;
    background: ${COLORS?.linearGradient?.tertiary};
    border-radius: 50px;
    border: none;
    bottom: -20px;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    position: absolute;
    right: -14px;
    width: 40px;
`
