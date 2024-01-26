// Constants
import { COLORS } from '@constants/colors'

// Styled Components
import styled from 'styled-components'

export const TextH1 = styled.h1<{ style?: React.CSSProperties }>`
    font-size: 5rem;
    font-weight: 800;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextH2 = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextH3 = styled.h3`
    font-size: 3rem;
    font-weight: 800;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextH4 = styled.h4`
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextH5 = styled.h5`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextH6 = styled.h6`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextP = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`

export const TextS = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ style }) => style?.color ?? COLORS?.black};
`
