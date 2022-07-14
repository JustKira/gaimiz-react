import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'


const LogoPage1 = ({nextPage, previousPage, handleSubmit, formV}) => {

    // () => nextPage()

    const onSubmit = () => {
        nextPage()
    }

    const WO = () => {
        if (formV.withLogo === "true") {
            return <h4 className='mt-4'>WITHOUT LOGO PRINTED ON SKIN</h4>
        } else {
            return <h4 className='mt-4 text-cyan-400'>WITHOUT LOGO PRINTED ON SKIN</h4>
        }
    }
    const W = () => {
        if (formV.withLogo === "true") {
            return <h4 className='mt-4 text-cyan-400'>WITH LOGO PRINTED ON SKIN</h4>
        } else {

            return <h4 className='mt-4'>WITH LOGO PRINTED ON SKIN</h4>
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='h-screen py-10'>
            <div className="w-full flex h-full justify-center items-center">

                <div
                    className='bg-black h-3/4 flex flex-col justify-center items-center px-12 my-10 rounded-xl md:rounded-3xl text-white'>
                    <h1 className='text-2xl md:text-3xl mb-10'>Select Print Logo</h1>
                    <div className='flex w-full text-sm lg:text-base lg:font-semibold text-center'>
                        <div className="flex flex-col justify-center items-center">
                            <Field
                                className='hidden'
                                component='input'
                                type="radio"
                                id={'wlogo'}
                                name="withLogo"
                                value={true}/>
                            <label for="wlogo"><img src="assets/white_logo.PNG" alt='Logo on'/></label>
                            <W/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Field
                                className='hidden'
                                component='input'
                                type="radio"
                                id={'wologo'}
                                name="withLogo"
                                value={false}/>
                            <label for='wologo'><img src="assets/white.PNG" alt='Logo off'/>
                            </label>
                            <WO/>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => previousPage()}
                            className=' text-white m-2 mt-10 left-10 bottom-10 border-4  px-8 md:px-12 py-2 tracking-widest text-sm md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black '>
                            Back
                        </button>
                        <button
                            className=' text-white m-2 mt-10 right-10 md:right-20 bottom-10 border-4 px-8 md:px-12 py-2 tracking-widest text-sm  md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black'>
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </form>

    )
}

const mapStateToProps = (state) => {

    return {formV: state.form.laptop_order.values}
}

export default compose(reduxForm({form: 'laptop_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(LogoPage1)