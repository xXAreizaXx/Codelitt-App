// External Dependancies
import * as yup from 'yup'

export const reminderSchema = yup.object().shape({
    color: yup.string().required('Color is required'),
    date: yup.string().required('Date is required'),
    description: yup.string().required('Description is required'),
    time: yup.string().required('Time is required'),
    title: yup.string().required('Title is required')
})
