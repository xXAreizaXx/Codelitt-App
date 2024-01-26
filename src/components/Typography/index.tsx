// Styled
import { TextH1, TextH2, TextH3, TextH4, TextH5, TextH6, TextP, TextS } from '@styles/components/typography'

export function TitleH1 ({ children, style }: ITypography) {
    return <TextH1 style={style}>{children}</TextH1>
}

export function TitleH2 ({ children, style }: ITypography) {
    return <TextH2 style={style}>{children}</TextH2>
}

export function TitleH3 ({ children, style }: ITypography) {
    return <TextH3 style={style}>{children}</TextH3>
}

export function TitleH4 ({ children, style }: ITypography) {
    return <TextH4 style={style}>{children}</TextH4>
}

export function TitleH5 ({ children, style }: ITypography) {
    return <TextH5 style={style}>{children}</TextH5>
}

export function TitleH6 ({ children, style }: ITypography) {
    return <TextH6 style={style}>{children}</TextH6>
}

export function TextParagraph ({ children, style }: ITypography) {
    return <TextP style={style}>{children}</TextP>
}

export function TextSpan ({ children, style }: ITypography) {
    return <TextS style={style}>{children}</TextS>
}
