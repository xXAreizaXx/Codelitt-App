// ReactJS
import { Controller } from 'react-hook-form'

// Components
import { TextSpan, TitleH6 } from '@components/Typography'

// Constants
import { COLORS } from '@constants/colors'

// Styles
import { Input, InputContainer, TextArea } from '@styles/components/inputs'

export function InputComponent ({ control, errors, label, name, placeholder, type = 'text' }: IInput) {
    return (
        <InputContainer>
            <TitleH6>{label}</TitleH6>
            <Controller
                control={control}
                name={name}
                render={({ field }) => <Input placeholder={placeholder} type={type} {...field} />}
            />
            <TextSpan style={{ color: COLORS?.red }}>
                {errors[name]?.message}
            </TextSpan>
        </InputContainer>
    )
}

export function TextAreaComponent ({ control, errors, label, placeholder, name }: IInput) {
    return (
        <InputContainer>
            <TitleH6>{label}</TitleH6>
            <Controller
                control={control}
                name={name}
                render={({ field }) => <TextArea placeholder={placeholder} rows={5} cols={5} {...field} />}
            />
            <TextSpan style={{ color: COLORS?.red }}>
                {errors[name]?.message}
            </TextSpan>
        </InputContainer>
    )
}
