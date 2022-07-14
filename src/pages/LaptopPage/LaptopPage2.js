import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// <LaptopConfig nextPage={nextPage} previousPage={previousPage}/> < div
// className = '' > <div className="flex flex-col mt-20 justify-center
// items-center w-full  ">
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import ReduxField from '../../components/form/ReduxField';

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

const LaptopPage2 = ({
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

        if (path !== undefined) {
            let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/custom-image-clear/${path}`, {method: 'POST'})
        }
        setPath(undefined)
        const uploadData = new FormData()
        console.log(user)
        uploadData.append('image', e)
        uploadData.append('user', user.id)
        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/custom-image/${user.id}`, {
            method: 'POST',
            body: uploadData
        })
        let data = await response.json()
        console.log(data)
        setPath(parseInt(data.id))
    }

    const onSubmit = (formValues) => {

        // if ((formValues.modelimage !== null || path !== undefined) &&
        // formValues.keyboard === true || formValues.back === true) {     if (useci ===
        // true) {         formValues.modelimage = `customProduct${path}.png`
        // console.log("test")     }     nextPage() }
        if (path === undefined && customImage === true) {
            return setError_str(" UPLOAD CUSTOM IMAGE OR RE-CLICK ON CUSTOM UPLOAD BUTTON TO CANCEL CUSTOM IMAGE " +
                    "SELECTION")
        }
        if (formValues.keyboard === false && formValues.back === false) {
            return setError_str(" PLEASE SELECT ADD-KEYBOARD OR ADD-BACK TO PROCEED TO NEXT STEP ")
        }

        if (customImage === true) {
            formValues.modelimage = `customProduct${path}.png`
            formValues.customImage = 'True'
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
                    className='absolute  bottom-52 md:bottom-40 left-1/2 -translate-x-1/2 w-screen flex justify-evenly py-10 px-42 z-10'>
                    <img
                        className='ml-28 h-28 md:h-52 lg:h-80 rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/tmp/done/customProduct${path}_b.png`}/>
                    <img
                        className='mr-28 h-28 md:h-52 lg:h-80  rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/tmp/done/customProduct${path}_k.png`}/></div>
            )
        } else {
            return (
                <div
                    className='absolute  bottom-52 md:bottom-40 left-1/2 -translate-x-1/2 w-screen flex justify-evenly py-10 px-42 z-10'>
                    <img
                        className='ml-28  h-28 md:h-52 lg:h-80  rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/done/product${imageid}_b.png`}/>
                    <img
                        className='mr-28 h-28 md:h-52 lg:h-80   rounded-2xl'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/done/product${imageid}_k.png`}img/></div>
            )
        }

    }

    const Error = () => {
        if (error_str !== "") {
            return (
                <h1
                    className='absolute text-ssm sm:text-base md:text-base font-semibold text-white bottom-24 md:bottom-14 z-10 md:left-40 md:w-1/3 w-1/2'>
                    <FontAwesomeIcon size="m" icon="circle-exclamation"/>&nbsp; NOTE:{error_str}</h1>
            )
        } else {
            return ( < h1 className = 'absolute font-semibold text-white bottom-14 z-10 left-40 w-1/2' > </h1>)
        }
    }

    return (
        <div className='h-full py-10'>
            <form
                className="flex flex-col m-20 md:mx-52 justify-center items-center
            "
                onSubmit={handleSubmit(onSubmit)}>
                <div
                    className='flex flex-col justify-center items-center px-40 sm:px-80 mb-20 bg-black pb-72 md:pb-os-flat pt-80 md:pt-96 w-full rounded-3xl relative'>

                    <h1 className=' absolute bg-black text-white top-14 text-3xl font-bold'>LAPTOP DESIGN</h1>

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
                    <h1
                        className='absolute bottom-48 md:bottom-40  md:left-32 text-black text-ssm md:text-sm font-bold z-20'>
                        <FontAwesomeIcon size="m" icon="circle-exclamation"/>
                        &nbsp; Note: Image maybe streched that not what final product look like</h1>

                    <ImageViewer/>

                    <div>

                        <div
                            className=' absolute top-64 h-20 md:h-52 py-32 md:py-60 -left-72 overflow bg-white w-fill-all text-black text-4xl font-semibold self-center text-center '></div>

                        <div
                            className='flex w-full bg-black pb-20 justify-between items-center my-0 mb-20 md:my-20 pt-20 md:pt-80'>

                            <div className=' lg:w-full '>
                                <div
                                    className='flex mx-0 sm:mx-10 lg:mx-24 my-40 w-full justify-between items-center'>

                                    <div
                                        className='flex flex-col px-2 sm:pr-20 lg:pr-52 justify-between items-center'>
                                        <h1 className='text-white my-3 font-bold text-base md:text-2xl uppercase'>Back</h1>
                                        <div
                                            className='bg-cyan-400 text-white px-12 md:px-24 py-4 md:py-6 rounded-md flex justify-center items-center relative'>
                                            <label>
                                                <Field
                                                    component="input"
                                                    type="checkbox"
                                                    className=' hidden'
                                                    id="back"
                                                    name="back"/> {formV.back
                                                    ? <span
                                                            className='absolute cursor-pointer  top-1/2 left-1/2 -translate-x-1/2 text-sm md:text-base  -translate-y-1/2 font-semibold'>REMOVE</span>
                                                    : <span
                                                        className='absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 text-sm md:text-base  -translate-y-1/2  font-semibold'>ADD</span>}
                                            </label>
                                        </div>
                                        <h1
                                            className='bg-white rounded-md my-3 px-4 md:px-8 py-1 md:py-2 text-black  text-sm md:text-2xl'>150L.E</h1>
                                    </div>
                                    <div
                                        className='flex flex-col px-2 sm:pr-20 lg:pr-52 justify-between items-center'>
                                        <h1 className='text-white my-3 font-bold text-base md:text-2xl uppercase'>keyboard</h1>
                                        <div
                                            className='bg-cyan-400 text-white px-12 md:px-24 py-4 md:py-6 rounded-md flex justify-center items-center relative'>
                                            <label>
                                                <Field
                                                    component="input"
                                                    type="checkbox"
                                                    className=' hidden'
                                                    id="body"
                                                    name="keyboard"/> {formV.keyboard
                                                    ? <span
                                                            className='absolute cursor-pointer  top-1/2 left-1/2 -translate-x-1/2 text-sm md:text-base  -translate-y-1/2 font-semibold'>REMOVE</span>
                                                    : <span
                                                        className='absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 text-sm md:text-base  -translate-y-1/2  font-semibold'>ADD</span>}
                                            </label>
                                        </div>
                                        <h1
                                            className='bg-white rounded-md my-3 px-4 md:px-8 py-1 md:py-2 text-black text-sm md:text-2xl'>150L.E</h1>
                                    </div>

                                    <div
                                        className=' absolute text-white bottom-1/2 md:bottom-1/3 translate-y-52 md:-translate-y-4'>
                                        <div className='flex w-full justify-between items-center'>
                                            <button
                                                type='button'
                                                onClick={() => setCustomImage(!customImage)}
                                                className='text-white border-4 px-4 md:px-12 py-1 md:py-2 tracking-widest text-center font-semibold z-10 text-ssm md:text-lg bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black w-3/4 md:w-full '>
                                                Custom Upload
                                            </button>

                                            {customImage
                                                ? <label
                                                        for="custom_image_sel"
                                                        className='text-ssm md:text-base translate-y-7  md:translate-x-3/4 lg:translate-x-72 left-8 md:left-3/4 z-50 absolute  mx-32 px-8 lg:px-10 py-1 md:py-2 text-xl cursor-pointer rounded-2xl border-2 border-white md:border-0'>
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
                        className='absolute text-white right-10 md:right-12 lg:right-20 bottom-10 border-4 px-8 md:px-12 py-2 tracking-widest text-sm  md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black'>
                        Next
                    </button>
                    <button
                        onClick={() => previousPage()}
                        className='absolute text-white left-10 md:left-12  xl:left-120 xl:translate-x-96 bottom-10 border-4  px-8 md:px-12 py-2 tracking-widest text-sm md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black '>
                        Back
                    </button>
                    <div
                        className=' absolute bottom-48 md:bottom-32 h-52 pb-52 md:py-60 -left-72 overflow bg-white w-fill-all text-black text-4xl font-semibold self-center text-center '></div>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {images_list: state.images.lpl, user: state.user.state, formV: state.form.laptop_order.values}
}
export default compose(reduxForm({form: 'laptop_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(LaptopPage2)