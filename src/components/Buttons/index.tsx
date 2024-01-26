// Styled
import { PrimaryButton, SecondaryButton } from '@styles/components/buttons'

export function BtnPrimary ({ children, isDisabled = false, onClick, size = 'medium', style, type = 'button' }: IButton) {
    return (
        <PrimaryButton
            disabled={isDisabled}
            onClick={onClick}
            size={size}
            style={style}
            type={type}
        >
            {children}
        </PrimaryButton>
    )
}

export function BtnSecondary ({ children, isDisabled = false, onClick, size = 'medium', style, type = 'button' }: IButton) {
    return (
        <SecondaryButton
            disabled={isDisabled}
            onClick={onClick}
            size={size}
            style={style}
            type={type}
        >
            {children}
        </SecondaryButton>
    )
}
