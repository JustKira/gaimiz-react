import React from 'react'
import VideoHolder from '../../components/VideoHolder'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import CustomSelection from '../../components/form/CustomSelection';
import ReduxField from '../../components/form/ReduxField';
import ReduxSelect from '../../components/form/ReduxSelect';

const ExtraCustomSelection = ({input, type}) => {
    return (
        <div>
            <div>
                <select
                    className=" px-3 py-3 mt-3 mx-10 text-slate-600 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                    {...input}
                    type={type}>
                    <option value="Empty"></option>
                    <option value="DELL">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                </select>
            </div>
        </div>
    )
}

const required = value => (value || typeof value === 'number'
    ? undefined
    : 'Required')

const LaptopDims = ({nextPage, previousPage, handleSubmit}) => {

    const onSubmit = (formValues) => {
        nextPage()
    }

    return (
        <div className='h-full py-10'>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div
                className='mx-10 xl:mx-40 my-40 px-4 xl:px-20 py-32 md:py-60 lg:py-80 rounded-2xl bg-black relative'>

                <h1 className=' absolute left-6 top-10 font-bold md:text-2xl lg:text-3xl text-white'>
                    LAPTOP DIMENSIONS</h1>
                    <VideoHolder text="BEFORE MEASURING, PLEASE WATCH THIS"/>

                <div className='flex flex-col justify-center items-center'>
                    
                    <div
                        className='flex flex-col lg:flex-row mt-20 md:mx-20 w-full md:px-20 lg:items-center'>
                        <h1
                            className='text-white text-base md:text-3xl font-semibold text-center mr-80 lg:mr-20'>BACK</h1>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="back_dims_x"
                                placeholder="LENGTH"
                                validate={required}/>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="back_dims_y"
                                placeholder="WIDTH"
                                validate={required}/>
                        </div>
                    </div>
                    <div
                        className='flex flex-col lg:flex-row mt-20 md:mx-20 w-full md:px-20 lg:items-center'>
                        <h1
                            className='text-white text-base md:text-3xl font-semibold text-center mr-80 lg:mr-20'>KEYBOARD</h1>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="keyboard_dims_x"
                                placeholder="LENGTH"
                                validate={required}/>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="keyboard_dims_y"
                                placeholder="WIDTH"
                                validate={required}/>
                        </div>
                    </div>

                    <h1 className='mt-20 text-white text-3xl font-semibold text-center'>
                        NOT REQUIRED
                    </h1>
                    {/* Other1 */}
                    <div
                        className='flex flex-col lg:flex-row mt-20 md:mx-20 w-full md:px-20 lg:items-center'>
                        <h1
                            className='text-white text-base md:text-3xl font-semibold text-center mr-80 lg:mr-20 text-ellipsis'>OTHER:1</h1>
                        <div className=' md:ml-36'>
                            <Field
                                component={ReduxSelect}
                                type="text"
                                name="other1_part"
                                placeholder="PART"
                                validate="">
                                <option></option>
                                <option value="CAMERA">Camera</option>
                                <option value="TOUCH_PAD">Touch Pad</option>
                                <option value="FINGER_PRINT">Finger Print</option>
                            </Field>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="other1_dims_x"
                                placeholder="LENGTH"
                                validate=""/>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="other1_dims_y"
                                placeholder="WIDTH"
                                validate=""/>
                        </div>
                    </div>
                    {/* Other2 */}
                    <div
                        className='flex flex-col lg:flex-row mt-20 md:mx-20 w-full md:px-20 lg:items-center'>
                        <h1
                            className='text-white text-base md:text-3xl font-semibold text-center mr-80 lg:mr-20'>OTHER:2</h1>
                        <div className=' md:ml-36'>
                            <Field
                                component={ReduxSelect}
                                type="text"
                                name="other2_part"
                                placeholder="PART"
                                validate="">
                                <option></option>
                                <option value="CAMERA">Camera</option>
                                <option value="TOUCH_PAD">Touch Pad</option>
                                <option value="FINGER_PRINT">Finger Print</option>
                            </Field>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="other2_dims_x"
                                placeholder="LENGTH"
                                validate=""/>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="other2_dims_y"
                                placeholder="WIDTH"
                                validate=""/>
                        </div>
                    </div>
                    {/* Other3 */}
                    <div
                        className='flex flex-col lg:flex-row mt-20 md:mx-20 w-full md:px-20 lg:items-center'>
                        <h1
                            className='text-white text-base md:text-3xl font-semibold text-center mr-80 lg:mr-20'>OTHER:3</h1>
                        <div className='md:ml-36'>
                            <Field
                                component={ReduxSelect}
                                type="text"
                                name="other3_part"
                                placeholder=""
                                validate="">
                                <option></option>
                                <option value="CAMERA">Camera</option>
                                <option value="TOUCH_PAD">Touch Pad</option>
                                <option value="FINGER_PRINT">Finger Print</option>
                            </Field>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="other3_dims_x"
                                placeholder="LENGTH"
                                validate=""/>
                        </div>
                        <div className='sm:ml-36 lg:ml-12'>
                            <Field
                                component={ReduxField}
                                type="number"
                                name="other3_dims_y"
                                placeholder="WIDTH"
                                validate=""/>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='absolute text-white right-5 sm:right-10 md:right-20 bottom-10 border-4 px-8 md:px-12 py-2 tracking-widest text-sm md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black'>
                        Next
                    </button>
                    <button
                        onClick={() => previousPage()}
                        className='absolute text-white right-40 sm:right-48 md:right-60 bottom-10 border-4  px-8 md:px-12  py-2 tracking-widest  text-sm md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black '>
                        Back
                    </button>
                </div>

            </div>
        </form>
        </div>
    )
}

export default compose(reduxForm({form: 'laptop_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(null, null))(LaptopDims)
