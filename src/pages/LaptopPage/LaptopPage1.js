import React from 'react'
import WhiteBanner from '../../components/WhiteBanner'
import VideoHolder from '../../components/VideoHolder'

import {Field, reduxForm} from 'redux-form'
import ReduxField from '../../components/form/ReduxField'
import CustomSelection from '../../components/form/CustomSelection'
import ReduxSelect from '../../components/form/ReduxSelect'
//Validity
const required = value => (value || typeof value === 'number'
    ? undefined
    : 'Required')

const LaptopPage1 = ({nextPage, handleSubmit}) => {

    const onSubmit = (formValues) => {
        nextPage()
    }

    return (
        <div >

        <div
            className=' absolute top-32 md:top-72 h-8 md:h-36 pt-8 md:pt-32 pb-16 md:pb-40 bg-white w-full mb-20 text-black text-base md:text-6xl font-bold self-center text-center'>
            CUSTOMIZE YOUR LAPTOP YOU LITTLE GAMER</div>
        <div className="flex flex-col mt-10 md:mt-20 justify-center items-center w-full  ">
            <div className='flex flex-col bg-black pb-20 pt-32 md:pt-96 px-4 md:px-72 rounded-lg md:rounded-3xl mb-20'>
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex w-full justify-center md:justify-between items-center my-20 relative'>
                        <label for='first' className='text-white absolute text-sm md:text-3xl font-bold left-4 -top-4 md:top-0 md:-left-56'>
                            Laptop Model
                        </label>

                        <div className='w-full px-1'>
                            <Field
                                component={ReduxSelect}
                                type="select"
                                name="prod"
                                validate={required}>
                                <option></option>
                                <option>DELL</option>
                                <option>LENOVO</option>
                                <option>HP</option>
                                <option>ACER</option>
                                <option>RAZER</option>
                            </Field>
                        </div>
                        <div className='w-full px-1 '>
                            <Field component={ReduxField} type="text" name="model" placeholder='MODEL' validate={ required}/>
                        </div>
                        <div className='w-full px-1'>
                            <Field component={ReduxField} type="text" name="year" placeholder='YEAR' validate={ required}/>
                        </div>
                        <button
                            type="submit"
                            className=' absolute -bottom-20 right-4 md:bottom-0 md:top-2 md:-right-52 text-white border-4 md:py-2 px-8 md:px-12 tracking-widest text-sm md:text-lg font-light bg-cyan-400 border-cyan-400 rounded-lg md:rounded-2xl uppercase drop-shadow-black'>Next</button>
                    </div>
                </form>
                <VideoHolder text="Need help what this video"/>
            </div>
        </div>
    </div>
    )
}

export default reduxForm({
    form: 'laptop_order', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    initialValues: {
        keyboard: false,
        back: false,
        customimage:"False",
        other1: "empty",
        other1_dims_x: 0,
        other1_dims_y: 0,
        other2: "empty",
        other2_dims_x: 0,
        other2_dims_y: 0,
        other3: "empty",
        other3_dims_x: 0,
        other3_dims_y: 0
    }
})(LaptopPage1)

// <WhiteBanner title={"CUSTOMIZE YOUR LAPTOP"}/> <div className="row
// black-body">     <ModelInput title={"Laptop Model"} option1={"Dell"}
// option2={"MODEL"} option3={"YEAR"} button={true}
// buttonLink={"/laptop-config"}/>     <VideoHolder /> </div>