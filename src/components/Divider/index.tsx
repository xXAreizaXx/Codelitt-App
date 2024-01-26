// Styles
import { DividerLine } from '@styles/components/divider'

export default function Divider ({ direction = 'horizontal' }: { direction?: 'horizontal' | 'vertical' }) {
    return <DividerLine direction={direction} />
}
