interface IButton {
    children: React.ReactNode
    isDisabled?: boolean
    onClick?: () => void
    size?: 'large' | 'medium' | 'small'
    style?: React.CSSProperties
    type?: 'button' | 'submit' | 'reset'
}

interface IStyleButton {
    isDisabled?: boolean
    size?: 'large' | 'medium' | 'small'
    style?: React.CSSProperties
}
