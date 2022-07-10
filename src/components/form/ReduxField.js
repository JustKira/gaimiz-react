import React from 'react'

const ReduxField = ({
    input,
    label,
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
                <input
                    {...input}
                    className="px-2 md:px-10 py-2 md:py-3 mt-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                    placeholder={placeholder}
                    type={type}/> {touched && ((error && <span className=" absolute text-white px-3 py-3 mt-3 mx-8">{error}</span>) || (warning && <span  className=" absolute text-white px-3 py-3 mt-3 mx-8">{warning}</span>))}
            </div>
        </div>
    )
}

export default ReduxField