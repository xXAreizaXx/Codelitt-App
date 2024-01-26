// Styled Components
import { COLORS } from '@constants/colors'
import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const Input = styled.input`
    border-radius: 6px;
    border: 1px solid #ccc;
    border: 1px solid ${COLORS?.lightGray};
    font-family: 'Open Sans', sans-serif;
    height: 50px;
    padding: 8px 12px;

    &[type='color'] {
        padding: 2px 4px;
        width: 55px;
    }
`

export const TextArea = styled.textarea`
    border-radius: 6px;
    border: 1px solid #ccc;
    border: 1px solid ${COLORS?.lightGray};
    font-family: 'Open Sans', sans-serif;
    padding: 8px 12px;
`
