import React, {useEffect, useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import {userLogin, getUserAction, refreshTokenAction} from '../redux/actions'
import {Link, useLocation, useNavigate} from "react-router-dom"
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

const LoginForm = (props) => {

    const [msg,
        setMsg] = useState("")

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state
        ?.from
            ?.pathname || "/";

    function onSubmit(formValues) {

        // if (props.accessToken !== null) {     setMsg("YOU ALREADY LOGGED IN")
        // return }

        setMsg("LOGIN SUCCESSFUL")
        console.log(formValues)
        props.userLogin(formValues.email, formValues.password)
        navigate(from, {replace: true})

    }

    const Error = () => {
        if (msg !== "") {

            return <h1 className=' bottom-32 absolute left-10'>
                {msg}</h1>

        } else {
            return (
                <h1 className=' bottom-32 absolute left-10'></h1>
            )
        }
    }

    if (props.accessToken === null || props.accessToken === undefined || props.accessToken === {}) {
        return (
            <div>
                <div>
                    <img src="assets/background.png" className="fixed -top-10 -z-10"/>
                    <form
                        className='flex flex-col justify-center items-center w-full h-full'
                        onSubmit={props.handleSubmit(onSubmit)}>
                        <div
                            className="flex flex-col justify-center items-center mt-20 w-1/4 pt-6 pb-32 rounded-2xl bg-white drop-shadow-black relative">
                            <h1 className="my-3 text-2xl font-semibold">CREATE AN ACCOUNT</h1>
                            <div className="mb-3 px-10 py-2 w-full">
                                <label className='tracking-widest font-light'>EMAIL</label>

                                <Field
                                    type='email'
                                    name='email'
                                    id="email_in"
                                    component={ReduxField}
                                    placeholder="Email"
                                    validate={required}/>
                            </div>

                            <div className="mb-3 px-10 py-2  w-full">
                                <label className='tracking-widest font-light'>PASSWORD</label>
                                <Field
                                    type='password'
                                    name='password'
                                    id="pass"
                                    component={ReduxField}
                                    placeholder="Password"
                                    validate={required}/>
                            </div>

                            <div className="mt-10 px-10 pb-20 w-full">
                                <button
                                    type='submit'
                                    className=" text-white border-4 py-2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-3xl uppercase drop-shadow-black w-full">CONTINUE</button>
                            </div>
                            <Error/>
                            <a href="register" className="absolute bottom-10 left-10">
                                You dont't have an account?
                                <Link to="/register">
                                    <span className='text-cyan-400'>
                                        CLICK HERE</span>
                                </Link>
                            </a>
                            {/* <a href="" class="absolute text-lg bottom-24 left-10">Forgot your password?</a> */}

                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return (

            <div className="w-full h-screen flex justify-center items-center">
                <img src="assets/background.png" className="fixed -top-10 -z-10"/>
                <div
                    className="flex flex-col h-1/2 justify-center items-center mt-20 w-1/2 pt-6 pb-12 rounded-xl bg-white drop-shadow-black relative">
                    <h1 className=' capitalize text-2xl'>
                        You Aleardy Logged in <Link to="/"> <span className='text-cyan-400 hover:text-cyan-600'> GO BACK</span></Link>
                    </h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.auth.state) {
        return {accessToken: state.auth.state}
    }
}
export default compose(reduxForm({form: 'loginForm'}), connect(mapStateToProps, {userLogin, getUserAction, refreshTokenAction}))(LoginForm)