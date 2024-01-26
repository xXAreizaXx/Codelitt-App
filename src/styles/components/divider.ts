// Constants
import { COLORS } from '@constants/colors'

// Styled Components
import styled from 'styled-components'

export const DividerLine = styled.div<{ direction?: 'horizontal' | 'vertical' }>`
    background-color: ${COLORS?.lightGray};
    border-radius: 50%;
    height: ${({ direction }) => (direction === 'horizontal' ? '2px' : '100%')};
    margin: 10px 0px;
    width: ${({ direction }) => (direction === 'vertical' ? '2px' : '100%')};
`
