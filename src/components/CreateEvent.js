import React, {useState} from 'react'
import {Field, reduxForm, updateSyncErrors} from 'redux-form'
import ReduxField from './form/ReduxField'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const required = value => (value || typeof value === 'number'
    ? undefined
    : 'Required')

const EventField = ({
    input,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) => {
    return (
        <div>
            <div>
                <input {...input} type={type}/> {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

const FileInput = ({
    input: {
        value: omitValue,
        onChange,
        onBlur,
        ...inputProps
    },
    meta: omitMeta,
    ...props
}) => <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}/>

const SendEvent = async(formValues, image) => {

    const uploadData = new FormData()
    uploadData.append("name", formValues.name)
    uploadData.append("describe", formValues.describe)
    uploadData.append("image", formValues.image)
    let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/event-create`, {
        method: 'POST',
        body: uploadData
    })
}

const CreateEvent = (props) => {

    const [image,
        setImage] = useState()
    function onSubmit(formValues) {
        console.log(formValues)
        SendEvent(formValues, image)
    }

    return (
        <div>
            <form
                className='mx-10 md:mb-20 flex flex-col '
                onSubmit={props.handleSubmit(onSubmit)}>
                <div className='my-4 flex  items-center'>
                    <h1 className='text-white my-3 font-semibold text-base md:text-xl uppercase'>Event name</h1>
                    <Field
                        component={ReduxField}
                        type="text"
                        name="name"
                        id="name"
                        validate={required}/>
                </div>
                <div className='my-4 flex  items-center'>
                    <h1
                        className='text-white mr-8 my-3 font-semibold text-base md:text-xl uppercase'>describe</h1>
                    <Field
                        component={ReduxField}
                        type="text"
                        name="describe"
                        id="describe"
                        validate={required}/>
                </div>
                <label
                    for="image_sel"
                    className='bg-cyan-400 mt-10 md:w-1/2 px-2 md:px-12 py-4  text-white rounded-md text-ssm md:text-xl cursor-pointer'>
                    <Field
                        component={FileInput}
                        className="hidden"
                        id="image_sel"
                        name="image"
                        onChange={(e) => setImage(e.target.value[0])}/>
                    <span className='mr-5'>
                        <FontAwesomeIcon size="xl" icon="upload"/>
                    </span>
                    SELECT IMAGE
                </label>
                <button
                    type="submit"
                    className=' text-white border-4 my-10 py-2 px-2 md:px-12 md:w-1/2 tracking-widest text-ssm md:text-lg font-light bg-cyan-400 border-cyan-400 rounded-xl md:rounded-2xl uppercase drop-shadow-black'>Add EVENT</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'event', // <------ same form name
})(CreateEvent)
