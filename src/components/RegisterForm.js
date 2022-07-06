import React from 'react'
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

function onSubmit(formValues) {
    console.log(formValues)
    createAccount(formValues)
    //redirect: 'follow'

}
const RegisterForm = (props) => {
    return (

        <div className="w-full">
            <img src="assets/background.png" className="fixed -top-10 -z-10"/>
            <form
                className='flex flex-col justify-center mb-10 items-center w-full h-full'
                onSubmit={props.handleSubmit(onSubmit)}>

                <div
                    className="flex flex-col justify-center items-center mt-20 w-1/2 pt-6 pb-12 bg-white drop-shadow-black relative">
                    <h1 className="my-3 text-2xl font-semibold">CREATE AN ACCOUNT</h1>

                    <div className="mb-3 px-10 py-2 w-full">
                        <label className='tracking-widest font-light'>First Name</label>
                        <Field
                            placeholder="Your name.."
                            type="text"
                            name="firstname"
                            component={ReduxField}
                            validate={required}/>
                    </div>
                    <div className="mb-3 px-10 py-2 w-full">
                        <label className='tracking-widest font-light'>Last Name</label>
                        <Field
                            type="text"
                            name="lastname"
                            component={ReduxField}
                            validate={required}
                            placeholder="Your last name.."/>
                    </div>

                    <div className="mb-3 px-10 py-2 w-full">
                        <label className='tracking-widest font-light'>EMAIL</label>
                        <Field
                            placeholder="Email"
                            type="email"
                            name="email"
                            component={ReduxField}
                            validate={required}/>
                    </div>

                    <div className="mb-3 px-10 py-2 w-full">
                        <label className='tracking-widest font-light'>USER NAME</label>
                        <Field
                            component={ReduxField}
                            type="text"
                            id="uname"
                            name="username"
                            validate={required}
                            placeholder="Username"/>
                    </div>

                    <div className="mb-3 px-10 py-2  w-full">
                        <label className='tracking-widest font-light'>PASSWORD</label>
                        <Field
                            type="password"
                            name="password"
                            component={ReduxField}
                            validate={required}
                            placeholder="Password"/>
                    </div>

                    <div className="mb-3 px-10 py-2  w-full">
                        <label className='tracking-widest font-light'>DATA OF BIRTH</label>
                        <Field type="date" component={ReduxField} name="birthday"></Field>

                    </div>

                    <div className="mb-3 px-10 py-2  w-full">
                        <label className='tracking-widest font-light'>PhoneNumber</label>
                        <Field type="number" name="phone" component={ReduxField} placeholder="Phone number"/>
                    </div>

                    <div className="mb-3 px-10 py-2  w-full">
                        <label className='tracking-widest font-light'>Location</label>
                        <Field type="text" name="location" component={ReduxField} placeholder="Location"/>
                    </div>

                    <div className="mt-10 px-10 pb-20 w-full">
                        <input
                            type="submit"
                            value="CONTINUE"
                            className=" text-white border-4 py-2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-3xl uppercase drop-shadow-black w-full"/>
                    </div>
                    <Link to="/login">

                        <a className="absolute  bottom-20 left-10">
                            Aleardy have an account?
                        </a>
                    </Link>
                </div>
            </form>
        </div>
    )
}

const createAccount = async(formValues) => {
    let response = await fetch(`http://127.0.0.1:8000/api/user-create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
    })
}
const mapStateToProps = (state) => {
    if (state.auth.state) {
        return {accessToken: state.auth.state.access}
    }
}

export default compose(reduxForm({form: 'registerForm'}), connect(mapStateToProps, null))(RegisterForm)