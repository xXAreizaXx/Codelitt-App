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
    gap: 1rem;
    height: 100%;
    padding: 20px;
    width: 60%;
`

export const BtnContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
`

export const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow-y: auto;
    padding: 0px 20px 0px 0px;
    width: 100%;
`
