import React from 'react'
import WhiteBanner from '../../components/WhiteBanner'
import VideoHolder from '../../components/VideoHolder'

import {Field, reduxForm} from 'redux-form'
import ReduxField from '../../components/form/ReduxField'
import CustomSelection from '../../components/form/CustomSelection'

//Validity
const required = value => (value || typeof value === 'number'
    ? undefined
    : 'Required')

const LaptopPage1 = ({nextPage, handleSubmit}) => {

    const onSubmit = (formValues) => {
        nextPage()
    }

    return (
        <div>

            <div className=' absolute top-72 h-36 pt-32 pb-40 bg-white w-full mb-20 text-black text-6xl font-bold self-center text-center'> CUSTOMIZE YOUR LAPTOP YOU LITTLE GAMER</div>
            <div className="flex flex-col mt-20 justify-center items-center w-full  ">
                <div className='flex flex-col bg-black pb-20 pt-96 px-72 rounded-3xl mb-20'>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex w-full justify-between items-center my-20 relative'>
                            <label for='first' className='text-white absolute text-3xl font-bold -left-56'>
                                Laptop Model
                            </label>
                            <Field
                                component={CustomSelection}
                                type="select"
                                name="prod"
                                id="company_select"
                                validate={required}/>

                            <div className='mr-6'>
                                <Field
                                    component={ReduxField}
                                    type="text"
                                    name="model"
                                    placeholder="MODEL"
                                    validate={required}/>
                            </div>
                            <div className='mr-6'>
                                <Field
                                    component={ReduxField}
                                    type="text"
                                    name="year"
                                    placeholder="YEAR"
                                    validate={required}/>
                            </div>
                            <button
                            type="submit"
                            className=' absolute top-2 -right-52 text-white border-4 py-2 px-12 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black'>Next</button>
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