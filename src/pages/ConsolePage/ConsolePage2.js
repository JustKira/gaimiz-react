import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// <LaptopConfig nextPage={nextPage} previousPage={previousPage}/> < div
// className = '' > <div className="flex flex-col mt-20 justify-center
// items-center w-full  ">
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import ReduxField from '../../components/form/ReduxField'
const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

const ConsoleField = ({
    input,
    label,
    type,
    placeholder,
    meta: {
        touched,
        error,
        warning
    }
}) => {
    return (
        <div>
            <div>
                <input
                    {...input}
                    className=" py-2 md:py-3 mt-3 mx-4 text-center font-bold text-slate-800 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                    placeholder={placeholder}
                    type={type}/> {touched && ((error && <span className=" absolute text-white px-3 py-3 mt-3 mx-8">{error}</span>) || (warning && <span className=" absolute text-white px-3 py-3 mt-3 mx-8">{warning}</span>))}
            </div>
        </div>
    )
}

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

const ConsolePage2 = ({
    nextPage,
    previousPage,
    images_list,
    handleSubmit,
    formV,
    user
}) => {

    const [imageid,
        setImageid] = useState(0)

    const [customImage,
        setCustomImage] = useState(false)

    const [error_str,
        setError_str] = useState("")
    const [path,
        setPath] = useState()
    const nextImage = () => {
        if (imageid < parseInt(images_list.list) - 1) {
            setImageid(imageid + 1)
        }
    }

    const prevImage = () => {
        if (!imageid <= 0) {
            setImageid(imageid - 1)
        }
    }
    console.log(formV)

    useEffect(() => {
        localStorage.setItem('customImage', customImage)
        try {
            const item = JSON.parse(localStorage.getItem('image_Path'));
            if (item) {
                setPath(item);
            }
        } catch (error) {
            return
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('customImage', customImage)
        localStorage.setItem('image_Path', JSON.stringify(path))

    }, [path])
    useEffect(() => {
        localStorage.setItem('customImage', customImage)
    }, [customImage])

    const SendCustomImage = async(e) => {

        // if (path !== undefined) { }
        setPath(undefined)
        const uploadData = new FormData()
        console.log(user)
        uploadData.append('image', e)
        uploadData.append('user', user.id)
        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/custom-image-console/${user.id}`, {
            method: 'POST',
            body: uploadData
        })
        let data = await response.json()
        console.log(data)
        setPath(parseInt(data.id))
    }

    const onSubmit = (formValues) => {

        if (path === undefined && customImage === true) {
            return setError_str(" UPLOAD CUSTOM IMAGE OR RE-CLICK ON CUSTOM UPLOAD BUTTON TO CANCEL CUSTOM IMAGE " +
                    "SELECTION")
        }
        if (formValues.body === false && formValues.control === 0) {
            return setError_str(" PLEASE ADD Controllor OR ADD-BACK TO PROCEED TO NEXT STEP ")
        }

        if (customImage === true) {
            formValues.modelimage = `customProduct_console${path}.png`
            formValues.customimage = 'True'
        } else {
            formValues.modelimage = `product${imageid}.png`
            localStorage.setItem('image_Path', "")
        }

        nextPage()
    }

    const ImageViewer = () => {
        if (path !== undefined && customImage === true) {
            return (
                <div
                    className='absolute bottom-40 left-1/2 -translate-x-1/2 w-screen flex justify-evenly py-10 px-42 z-10'>
                    <img
                        className='ml-32 h-32 md:h-80   rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/tmp/done/customProduct_console${path}_console_l.png`}/>
                    <img
                        className='mr-32 h-32 md:h-80  rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/tmp/done/customProduct_console${path}_console_r.png`}/></div>
            )
        } else {
            return (
                <div
                    className='absolute bottom-40 left-1/2 -translate-x-1/2 w-screen flex justify-evenly py-10 px-42 z-10'>
                    <img
                        className='ml-32 h-32 md:h-80  rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/done/product_console${imageid}_console_l.png`}/>
                    <img
                        className='mr-32 h-32 md:h-80  rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/done/product_console${imageid}_console_r.png`}img/></div>
            )
        }

    }

    const Error = () => {
        if (error_str !== "") {
            return (
                <h1 className='absolute font-semibold text-white bottom-14 z-10 left-40 w-1/3'>
                    <FontAwesomeIcon size="m" icon="circle-exclamation"/>&nbsp; NOTE:{error_str}</h1>
            )
        } else {
            return ( < h1 className = 'absolute font-semibold text-white bottom-14 z-10 left-40 w-1/2' > </h1>)
        }
    }

    return (
        <form
            className="flex flex-col m-20 md:mx-52 justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}>
            <div
                className='flex flex-col justify-center items-center px-40 bg-black pb-os-flat pt-80 md:pt-96 w-full rounded-3xl relative'>

                <h1
                    className=' absolute bg-black text-white top-14 text-3xl font-bold'>CONSOLE DESIGN</h1>

                <div
                    className='absolute left-0 top-80 w-full flex justify-between items-center z-10 '>
                    <span
                        className=' cursor-pointer bg-none duration-200 ease-in hover:bg-slate-300 px-3 rounded-full'>
                        <FontAwesomeIcon
                            size="4x"
                            icon="chevron-left"
                            onClick={() => {
                            prevImage()
                        }}/>

                    </span>
                    <Field
                        component="input"
                        className='hidden'
                        type="radio"
                        id="image-input"
                        name="modelimage"
                        value=''/>
                    <label for="image-input">
                        <img
                            className='h-32 md:h-80'
                            src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/raw/product${imageid}.png`}/>

                        <h1 className='text-2xl text-center mt-2 font-semibold'>
                            {imageid + 1}/{images_list.list}
                        </h1>
                    </label>
                    <span
                        className='cursor-pointer bg-none duration-200 ease-in hover:bg-slate-300 px-3 rounded-full'>
                        <FontAwesomeIcon
                            size="4x"
                            icon="chevron-right"
                            onClick={() => {
                            nextImage()
                        }}/>

                    </span>

                </div>
                <Error/> {/* <h1 className='absolute bottom-80 text-black text-2xl font-bold z-20'>IMAGE EXAMPLE</h1> */}
                <h1 className='absolute bottom-40  left-32 text-black text-sm font-bold z-20'>
                    <FontAwesomeIcon size="m" icon="circle-exclamation"/>
                    &nbsp; Note: Image maybe me streched that not what final product look like</h1>

                <ImageViewer/>

                <div>

                    <div
                        className=' absolute top-64 h-20 md:h-52 py-32 md:py-60 -left-72 overflow bg-white w-fill-all text-black text-4xl font-semibold self-center text-center '></div>

                    <div
                        className='flex w-full bg-black pb-40 justify-between items-center my-0 mb-20 md:my-20 pt-20 md:pt-80'>

                        <div className='w-full '>
                            <div className='flex my-32 w-full justify-between items-center'>

                                <div className='flex flex-col pr-5 lg:pr-52 justify-between items-center'>
                                    <h1 className='text-white my-3 font-bold text-2xl uppercase'>Body</h1>
                                    <div
                                        className='bg-cyan-400 text-white px-12 md:px-24 py-4 md:py-6 rounded-md flex justify-center items-center relative'>
                                        <label>
                                            <Field
                                                component="input"
                                                type="checkbox"
                                                className=' hidden'
                                                id="body"
                                                name="body"/> {formV.body
                                                ? <span
                                                        className='absolute cursor-pointer  top-1/2 left-1/2 -translate-x-1/2 text-sm md:text-base  -translate-y-1/2 font-semibold'>REMOVE</span>
                                                : <span
                                                    className='absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 text-sm md:text-base  -translate-y-1/2  font-semibold'>ADD</span>}
                                        </label>
                                    </div>
                                    <h1 className='bg-white rounded-md my-3 px-4 md:px-8 py-1 md:py-2 text-black text-2xl'>200L.E</h1>
                                </div>



                                <div className='flex flex-col pl-5 lg:pl-52  justify-between items-center'>
                                    <h1 className='text-white my-3 font-bold text-2xl uppercase'>Controller</h1>

                                    <div className='flex justify-center items-center pr-9'>
                                        <Field component={ConsoleField} type="number" id="control" name="control"/>
                                    </div>

                                    <h1
                                        className='bg-white rounded-md my-3 px-8 py-2 text-ssm text-black md:text-xl text-center'>75 L.E FORE EACH</h1>
                                </div>




                                <div className=' absolute text-white bottom-1/3 -translate-y-4'>
                                    <div className='flex w-full justify-between items-center'>
                                        <button
                                            type='button'
                                            onClick={() => setCustomImage(!customImage)}
                                            className='text-white border-4 px-12 py-2 tracking-widest text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black '>
                                            Custom Upload
                                        </button>

                                        {customImage
                                            ? <label
                                                    for="custom_image_sel"
                                                    className='mx-32  px-12 py-2 text-xl cursor-pointer'>
                                                    <Field
                                                        component={FileInput}
                                                        className="hidden"
                                                        id="custom_image_sel"
                                                        name="customimage"
                                                        onChange={(e) => SendCustomImage(e)}
                                                        value={`customProduct.png`}/>
                                                    <span className='mr-5'>
                                                        <FontAwesomeIcon size="xl" icon="upload"/>
                                                    </span>
                                                    SELECT IMAGE
                                                </label>
                                            : <div></div>}

                                    </div>
                                    <h1 className='ml-2 mt-4 capitalize'>Upload your image</h1>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <button
                    type="submit"
                    className='absolute text-white right-20 bottom-10 border-4 px-12 py-2 tracking-widest text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black'>
                    Next
                </button>
                <button
                    onClick={() => previousPage()}
                    className='absolute text-white right-60 bottom-10 border-4 px-12 py-2 tracking-widest text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black '>
                    Back
                </button>
                <div
                    className=' absolute bottom-32 h-52 py-60 -left-72 overflow bg-white w-fill-all text-black text-4xl font-semibold self-center text-center '></div>
            </div>

        </form>
    )
}

const mapStateToProps = (state) => {

    return {images_list: state.images.lpl, user: state.user.state, formV: state.form.console_order.values}
}
export default compose(reduxForm({form: 'console_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(ConsolePage2)