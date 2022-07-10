import React, { Children } from 'react'

const ReduxSelect = ({input, type,meta:{touched,error,warning},children}) => {
    return (
    <div>
      <div>
      <select {...input} className="px-2 md:px-10 py-2 md:py-3 mt-3 mx-1 md:mx-3 text-slate-600 relative bg-gray-300 rounded text-ssm md:text-sm shadow outline-none focus:outline-none focus:ring w-full" type={type} >
        {children}
        
        </select>
        {touched &&
          ((error && <span  className=" absolute text-white text-ssm md:text-base px-3 py-3 mt-0 md:mt-3 mx-8">{error}</span>) ||
            (warning && <span  className=" absolute text-white text-ssm md:text-base px-3 py-3 mt-0 md:mt-3 mx-8">{warning}</span>))}
      </div>
    </div>
    )
  }

export default ReduxSelect