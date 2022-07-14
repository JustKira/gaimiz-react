import React, {useEffect, useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import {userLogin, getUserAction, refreshTokenAction} from '../redux/actions'
import {Link, useLocation, useNavigate} from "react-router-dom"
import ReduxField from './form/ReduxField';
import ResponseWButton from '../pages/Ress/ResponseWButton';
import ResponseWButtonCloseless from '../pages/Ress/ResponseWButtonCloseless';

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

    const [open,
        setOpen] = useState(true)

    const Popup = () => {
        if (open === true) {
            return <ResponseWButton
                info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius exercitationem quos libero qui'
                head='warning'
                close={setOpen}
                buttontext='Login'/>
        } else {
            return <div></div>
        }
    }

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state
        ?.from
            ?.pathname || "/";

    function onSubmit(formValues) {

        // if (props.accessToken !== null) {     setMsg("YOU ALREADY LOGGED IN") return
        // }

        console.log(formValues)
        props.userLogin(formValues.email, formValues.password)
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

    const [logged,
        setLogged] = useState(false)

    useEffect(() => {
        if (props.accessToken === undefined) {
            setLogged(false)
        } else {
            setLogged(true)
        }

    }, [])

    const PopupHandler = () => {

        if (logged === true) {
            return <ResponseWButtonCloseless
                buttonfunc={() => navigate('/')}
                buttontext='Back'
                head='Warning'
                info='YOU ARLEADY LOGGED IN'/>
        }

        if (props.accessToken === undefined) {
            return <div></div>
        } else {
            return <ResponseWButtonCloseless
                buttonfunc={() => navigate('/')}
                buttontext='Back'
                head='Success'
                info='YOU Logged in Successfully you can now browes our website'/>
        }

    }

    return (
        <div>
            <PopupHandler/>
            <div>
                <form
                    className='flex flex-col justify-center items-center w-full h-screen'
                    onSubmit={props.handleSubmit(onSubmit)}>
                    <div
                        className="flex flex-col justify-center items-center mb-20 px-40 md:px-52  mt-20 w-1/4 pt-6 py-96 rounded-2xl bg-white drop-shadow-black relative">
                        <h1 className="my-3 text-2xl font-semibold">LOGIN</h1>
                        <div className="absolute top-16 md:block mb-3 px-10 py-2 w-full">
                            <label className='tracking-widest font-light'>EMAIL</label>

                            <Field
                                type='email'
                                name='email'
                                id="email_in"
                                component={ReduxField}
                                placeholder="Email"
                                validate={required}/>
                        </div>

                        <div className="absolute  top-40 md:block mb-3 px-10 py-2  w-full">
                            <label className='tracking-widest font-light'>PASSWORD</label>
                            <Field
                                type='password'
                                name='password'
                                id="pass"
                                component={ReduxField}
                                placeholder="Password"
                                validate={required}/>
                        </div>

                        <div className="absolute bottom-16 mt-10 px-10 pb-20 w-full">
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
}

const mapStateToProps = (state) => {
    if (state.auth.state) {
        return {accessToken: state.auth.state.access}
    }
}
export default compose(reduxForm({form: 'loginForm'}), connect(mapStateToProps, {userLogin, getUserAction, refreshTokenAction}))(LoginForm)