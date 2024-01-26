// Constants
import { COLORS } from '@constants/colors'

// Styled Components
import styled from 'styled-components'

export const AppMain = styled.main`
    align-items: center;
    background-color: ${COLORS?.primary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    justify-content: center;
`

export const DetailCalendarMain = styled.main`
    align-items: center;
    border-radius: 40px;
    box-shadow: 0px 4px 28px 2px #D1DCF0;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-height: 690px;
    max-width: 1120px;
    width: 100%;
`
