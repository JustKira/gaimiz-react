import React, {useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import ReduxField from './form/ReduxField';
function rFieldInput({input, type}) {
    return (
        <div>
            <input {...input } type={type}/>
        </div>
    )
}
const required = value => (value || typeof value === 'number'
    ? undefined
    : 'Required')

const RegisterForm = (props) => {

    const createAccount = async(formValues) => {
        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/user-create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })

        let data = await response.json()
        try {
            setResponse_txt(JSON.stringify(data))
        } catch (error) {
            setResponse_txt(data)
        }

    }
    function onSubmit(formValues) {
        console.log(formValues)
        createAccount(formValues)
        //redirect: 'follow'

    }
    const [response_txt,
        setResponse_txt] = useState("")

    if (props.accessToken === undefined) {
        return (

            <div className="h-screen">
                <form
                    autoComplete="off"
                    className='flex flex-col justify-center pb-10 items-center w-full'
                    onSubmit={props.handleSubmit(onSubmit)}>

                    <div
                        className="flex flex-col justify-center items-center mt-10 md:mt-32 w-3/4 xl:w-1/2 px-4 pt-6 pb-12 rounded-3xl bg-white drop-shadow-black relative">
                        <h1 className="my-3 text-2xl font-semibold">CREATE AN ACCOUNT</h1>

                        <div className='flex w-full justify-between  pr-4'>
                            <div className="mb-3 px-1 md:px-10 py-2 w-full">
                                <label className='tracking-widest font-light'>First Name</label>
                                <div className='mx-4'>
                                <Field
                                    placeholder="Your name.."
                                    type="text"
                                    name="firstname"
                                    component={ReduxField}
                                    validate={required}/></div>
                            </div>

                            <div className="mb-3 px-1 md:px-10 py-2 w-full">
                                
                                <label className='tracking-widest font-light'>Last Name</label>
                                <div className='mx-4'>
                                <Field
                                    placeholder="Your lastname.."
                                    type="text"
                                    name="Last"
                                    component={ReduxField}
                                    validate={required}/></div>
                            </div>
                        </div>

                        <div className="mb-3 px-1 md:px-10 py-2 w-full">
                            <label className='tracking-widest font-light'>USER NAME</label>
                            <div className='mx-4'>
                                <Field
                                    component={ReduxField}
                                    type="text"
                                    id="uname"
                                    name="username"
                                    validate={required}
                                    placeholder="Username"/></div>
                        </div>
                        <div className="mb-3 px-1 md:px-10 py-2  w-full ">
                            <label className='tracking-widest font-light'>PhoneNumber</label>
                            <div className='mx-4'>
                                <Field
                                    type="number"
                                    name="phone"
                                    component={ReduxField}
                                    placeholder="Phone number"/></div>
                        </div>
                        <div className="mb-3 px-1 md:px-10 py-2  w-full ">

                            <label className='tracking-widest font-light'>EMAIL</label>
                            <div className='mx-4'>
                                <Field
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    component={ReduxField}
                                    validate={required}/></div>
                        </div>

                        <div className="mb-3 px-1 md:px-10 py-2 w-full">
                            <label className='tracking-widest font-light'>PASSWORD</label>
                            <div className='mx-4'>
                                <Field
                                    type="password"
                                    name="password"
                                    component={ReduxField}
                                    validate={required}
                                    placeholder="Password"/></div>
                        </div>
                        <div className="mb-3 px-1 md:px-10 py-2 w-full">
                            <div className='mx-4'>
                                <label className='tracking-widest font-light'>DATA OF BIRTH</label>
                                <Field type="date" component={ReduxField} validate={required} name="birthday"></Field>
                            </div>

                        </div>

                        <div className='flex w-full justify-between md:px-10'>

                            <div className="mb-3 pl-1 lg:px-4 py-2 w-full">
                                <label className='tracking-widest font-light'>Governorate</label>

                                <Field
                                    type="text"
                                    name="governorate"
                                    component={ReduxField}
                                    placeholder="Governorate"/>

                            </div>
                            <div className="mb-3 pl-1 lg:px-4 py-2  w-full">
                                <label className='tracking-widest font-light'>Area</label>
                                <Field type="text" name="area" component={ReduxField} placeholder="Area"/>
                            </div>
                            <div className="mb-3 pl-1 lg:px-4 py-2  w-full">
                                <label className='tracking-widest font-light'>District</label>
                                <Field
                                    type="text"
                                    name="district"
                                    component={ReduxField}
                                    placeholder="District"/>
                            </div>
                        </div>

                        <div className="mt-10 px-10 pb-20 w-full">
                            <input
                                type="submit"
                                value="CONTINUE"
                                className=" text-white border-4 py-2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-3xl uppercase drop-shadow-black w-full ease-in duration-200 cursor-pointer hover:bg-cyan-600 hover:border-cyan-600 "/>
                        </div>

                        {response_txt
                            ? <div>
                                    <Link to="/login">
                                        <a className="absolute  bottom-20 left-10">
                                            {response_txt}

                                        </a>
                                    </Link>
                                </div>
                            : <Link to="/login">

                                <a className="absolute  bottom-20 left-10">Aleardy have an account?
                                    <span className='text-cyan-400  hover:text-cyan-600'>
                                        Click Here
                                    </span>
                                    To Login
                                </a>
                            </Link>}
                    </div>
                </form>
            </div>
        )
    } else {
        return (

            <div className="w-full h-screen flex justify-center items-center">
                <img src="assets/background.png" className="fixed -top-10 -z-10"/>
                <div
                    className="flex flex-col h-1/2 justify-center items-center mt-20 w-1/2 pt-6 pb-12 rounded-xl bg-white drop-shadow-black relative">
                    <h1 className=' capitalize text-2xl'>
                        You Aleardy Logged in
                        <Link to="/">
                            <span className='text-cyan-400 hover:text-cyan-600'>
                                GO BACK</span>
                        </Link>
                    </h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.auth.state) {
        return {accessToken: state.auth.state.access}
    }
}

export default compose(reduxForm({form: 'registerForm'}), connect(mapStateToProps, null))(RegisterForm)