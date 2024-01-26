// Libs
import { getSize } from '@lib/utils'

// Constants
import { COLORS } from '@constants/colors'

// Styled Components
import styled from 'styled-components'

export const PrimaryButton = styled.button<IStyleButton>`
    background-color: ${COLORS?.primary};
    border-radius: ${({ style }) => style?.borderRadius ?? '4px'};;
    border: none;
    box-shadow: 0px 4px 28px 2px #D1DCF0;
    cursor: pointer;
    height: 50px;
    outline: none;
    width: ${({ size }) => getSize(size)};
`

export const SecondaryButton = styled.button<IStyleButton>`
    background-color: ${COLORS?.primary};
    border-radius: ${({ style }) => style?.borderRadius ?? '4px'};;
    border: none;
    box-shadow: 0px 4px 28px 2px #D1DCF0;
    cursor: pointer;
    height: 50px;
    outline: none;
    width: ${({ size }) => getSize(size)};
`
