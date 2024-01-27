'use client'

// NextJS
import { useRouter } from 'next/navigation'

// ReactJS
import { useForm, type SubmitHandler } from 'react-hook-form'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import { BtnPrimary } from '@components/Buttons'
import { InputComponent, TextAreaComponent } from '@components/Inputs'
import { TextParagraph } from '@components/Typography'
import Divider from '@components/Divider'

// Lib
import { type AppDispatch, type RootState } from '@lib/redux/store'
import { removeReminder, editReminder } from '@lib/redux/slices/reminderSlice'

// Constants
import { reminderSchema } from '@constants/schemas'
import { COLORS } from '@constants/colors'

// External Dependencies
import { toast } from 'sonner'
import { yupResolver } from '@hookform/resolvers/yup'

// Styles
import { BtnContainer, Form } from '@styles/ui/edit-reminder'

export default function EditReminderForm ({ id }: { id: string }) {
    // Navigation
    const { push } = useRouter()

    // Redux
    const reminders = useSelector((state: RootState) => state?.reminder?.reminders)

    const dispatch: AppDispatch = useDispatch()

    // Constants
    const editData = reminders?.find((reminder) => reminder?.id === Number(id))

    // Forms
    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<AddReminderValues>({
        defaultValues: {
            title: editData?.title,
            description: editData?.description,
            date: editData?.date,
            time: editData?.time,
            color: editData?.color
        },
        mode: 'all',
        resolver: yupResolver(reminderSchema)
    })

    // Functions
    const onSubmit: SubmitHandler<AddReminderValues> = (data) => {
        dispatch(editReminder({ id: Number(id), updatedData: data as Reminder }))

        toast.info('Reminder edited successfully')

        push('/')
    }

    const handleRemove = () => {
        dispatch(removeReminder(Number(id)))

        toast.error('Reminder removed successfully')

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
                <BtnPrimary onClick={handleRemove} size='small' style={{ backgroundColor: COLORS?.red }}>
                    <TextParagraph style={{ color: COLORS?.white }}>
                        Remove
                    </TextParagraph>
                </BtnPrimary>

                <div style={{ display: 'flex', gap: '1rem' }}>
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
                </div>
            </BtnContainer>
        </Form>
    )
}
