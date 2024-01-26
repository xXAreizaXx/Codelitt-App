'use client'

// NextJS
import { useRouter } from 'next/navigation'

// ReactJS
import { useForm, type SubmitHandler } from 'react-hook-form'

// Components
import { BtnPrimary } from '@components/Buttons'
import { InputComponent, TextAreaComponent } from '@components/Inputs'
import { TextParagraph } from '@components/Typography'
import Divider from '@components/Divider'

// Constants
import { reminderSchema } from '@constants/schemas'
import { COLORS } from '@constants/colors'

// External Dependencies
import { toast } from 'sonner'
import { yupResolver } from '@hookform/resolvers/yup'

// Styles
import { BtnContainer, Form } from '@styles/ui/add-reminder'

export default function AddReminderForm () {
    // Navigation
    const { push } = useRouter()

    // Forms
    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<AddReminderValues>({
        mode: 'all',
        resolver: yupResolver(reminderSchema)
    })

    // Functions
    const onSubmit: SubmitHandler<AddReminderValues> = (data) => {
        console.log(data)

        toast.success('Event has been created')

        push('/')
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
                control={control}
                errors={errors}
                label='Title'
                name='title'
                placeholder='Title'
            />

            <TextAreaComponent
                control={control}
                errors={errors}
                label='Description'
                name='description'
                placeholder='Description'
            />

            <InputComponent
                control={control}
                errors={errors}
                label='Date'
                name='date'
                type='date'
                placeholder='MM/DD/YYYY'
            />

            <InputComponent
                control={control}
                errors={errors}
                label='Time'
                name='time'
                type='time'
                placeholder='HH:MM'
            />

            <InputComponent
                control={control}
                errors={errors}
                label='Color'
                name='color'
                type='color'
            />

            <Divider />

            <BtnContainer>
                <BtnPrimary onClick={() => { push('/') }} size='small' style={{ backgroundColor: COLORS?.gray }}>
                    <TextParagraph style={{ color: COLORS?.white }}>
                        Cancel
                    </TextParagraph>
                </BtnPrimary>
                <BtnPrimary
                    size='small'
                    style={{ backgroundColor: COLORS?.secondary }}
                    type='submit'
                >
                    <TextParagraph style={{ color: COLORS?.white }}>
                        Save
                    </TextParagraph>
                </BtnPrimary>
            </BtnContainer>
        </Form>
    )
}
