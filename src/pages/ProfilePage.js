import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {compose} from 'redux'
import {Field, reduxForm} from 'redux-form'
import ReduxField from '../components/form/ReduxField'
import {getUserAction} from '../redux/actions'

const ProfileField = ({
    input,
    label,
    className,
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
                <input {...input} className={className} placeholder={placeholder} type={type}/> {touched && ((error && <span
                    className=" absolute text-white text-ssm md:text-base px-3 py-3 mt-0 md:mt-3 mx-8">{error}</span>) || (warning && <span
                    className=" absolute text-white text-ssm md:text-base px-3 py-3 mt-0 md:mt-3 mx-8">{warning}</span>))}
            </div>
        </div>
    )
}

const accountUpdate = async(formValues, user_id) => {

    let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/user-update/${user_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
    })

    let data = await response.json()
    console.log(data)

    // try {     setResponse_txt(JSON.stringify(data)) } catch (error) {
    // setResponse_txt(data) }

}

const ProfilePage = (props) => {

    const [showData,
        setShowData] = useState("")

    // <button onClick={() => props.dispatch({type: "USER_LOGOUT"})}>Logout</button>
    function onSubmit(formValues) {
        console.log(formValues)
        accountUpdate(formValues, props.user.id)
        props.getUserAction()
        //redirect: 'follow'
       
    }

    const ProfileSwitcher = () => {
        if (showData === "security") {
            return (
                <div>
                    <form className='flex flex-col' onSubmit={props.handleSubmit(onSubmit)}>
                    <label className='text-5xl font-thin mb-10'>Security</label>
                        <div>
                            <label className=' font-thin text-xl capitalize'>email</label>
                            <Field
                                placeholder={`${props.user.email}`}
                                type="email"
                                name="email"
                                className="px-2 md:pr-44 py-2 md:py-3 my-3 mx-1  text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                component={ProfileField}/>
                        </div>
{/* 
                        <div>
                            <label className=' font-thin text-xl capitalize'>password</label>
                            <Field
                                placeholder={`***********`}
                                type="password"
                                name="password"
                                className="px-2 md:pr-44 py-2 md:py-3 my-3 mx-1  text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                component={ProfileField}/>
                        </div> */}

                        <div className='flex justify-end w-full'>
                            <button
                                type='sumbit'
                                className="text-white border-4 mt-20 px-4 md:px-12 py-1 md:py-2 tracking-widest text-center font-semibold z-10 text-ssm md:text-base bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black w-1/4">Update</button>
                        </div>
                    </form>
                </div>
            )
        }
        if (showData === "logout") {
            return (
                <div className='flex h-full justify-between items-center'>
                    <h1 className='text-2xl font-semibold uppercase '>You Sure You want to logout</h1>
                    <button
                        className="text-white border-4 px-4 md:px-12 py-1 md:py-2 tracking-widest text-center font-semibold z-10 text-ssm md:text-base bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black w-1/4"
                        onClick={() => props.dispatch({type: "USER_LOGOUT"})}>Logout</button>
                </div>
            )
        }

        return (
            <div>
                <form className='flex flex-col' onSubmit={props.handleSubmit(onSubmit)}>
                <label className='text-5xl font-thin mb-10'>Profile</label>
                    <div className='flex justify-between w-full'>
                        <div>
                            <label className=' font-thin text-xl capitalize'>firstname</label>
                            <Field
                                placeholder={`${props.user.firstname}`}
                                type="text"
                                name="firstname"
                                className="px-2 md:pr-44 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                component={ProfileField}/>
                        </div>
                        <div>
                            <label className=' font-thin text-xl capitalize'>lastname</label>
                            <Field
                                placeholder={`${props.user.lastname}`}
                                type="text"
                                name="lastname"
                                className="px-2 md:pr-44 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                component={ProfileField}/>
                        </div>
                    </div>
                    <div>
                        <label className=' font-thin text-xl capitalize'>username</label>
                        <Field
                            placeholder={`${props.user.username}`}
                            type="text"
                            name="username"
                            className="px-2 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                            component={ProfileField}/>
                    </div>
                    
                    <div>
                        <label className=' font-thin text-xl capitalize'>phone</label>
                        <Field
                            placeholder={`${props.user.phone}`}
                            type="text"
                            name="phone"
                            className="px-2 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                            component={ProfileField}/>
                    </div>
                    <div>
                        <label className=' font-thin text-xl capitalize'>birthday</label>
                        <Field
                            placeholder={`${props.user.birthday}`}
                            type="date"
                            name="birthday"
                            className="px-2 py-2 md:py-3 my-3 mx-1 md:mx-4 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                            component={ProfileField}/>
                    </div>
                    <div className='flex flex-col mt-12 w-full'>
                        <label className='text-3xl font-thin'>Location</label>
                        <div className='flex mt-10 justify-between w-full'>
                            <div>
                                <label className=' font-thin text-xl capitalize'>governorate</label>
                                <Field
                                    placeholder={`${props.user.governorate}`}
                                    type="text"
                                    name="governorate"
                                    className="px-2 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                    component={ProfileField}/>
                            </div>
                            <div>
                                <label className=' font-thin text-xl capitalize'>area</label>
                                <Field
                                    placeholder={`${props.user.area}`}
                                    type="text"
                                    name="area"
                                    className="px-2 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                    component={ProfileField}/>
                            </div>
                            <div>
                                <label className=' font-thin text-xl capitalize'>district</label>
                                <Field
                                    placeholder={`${props.user.district}`}
                                    type="text"
                                    name="district"
                                    className="px-2 py-2 md:py-3 my-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full"
                                    component={ProfileField}/>
                            </div>
                        </div>
                        <div className='flex justify-end w-full'>
                        <button
                            type='sumbit'
                            className="text-white border-4 mt-2 px-4 md:px-12 py-1 md:py-2 tracking-widest text-center font-semibold z-10 text-ssm md:text-base bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black w-1/4">Update</button>
                    </div>
                    </div>
                </form>
            </div>
        )

    }

    return (
        <div className="flex justify-center items-center w-full h-screen ">
            <div className='bg-white w-1/2 h-3/4 text-black px-10 my-10 drop-shadow-black rounded-2xl'>
                <div className='flex w-full'>

                    <ul className='w-20 capitalize text-xl pt-10'>
                        <li className='py-2 cursor-pointer' onClick={() => setShowData("profile")}>profile</li>
                        <li className='py-2 cursor-pointer' onClick={() => setShowData("security")}>security</li>
                        <li className='py-2 cursor-pointer' onClick={() => setShowData("logout")}>logout</li>
                    </ul>

                    <div className='ml-20 mt-10 w-full'>
                        <ProfileSwitcher/>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    if (state.auth.state) {
        return {user: state.user.state}
    }
}

export default compose(reduxForm({form: 'user_update_form'}), connect(mapStateToProps, {getUserAction}))(ProfilePage)