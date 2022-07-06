import React, { Children } from 'react'

const ReduxSelect = ({input, type,meta:{touched,error,warning},children}) => {
    return (
    <div>
      <div>
      <select {...input} className="px-10 py-3 mt-3 mx-3 text-slate-600 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full" type={type} >
        {children}
        
        </select>
        {touched &&
          ((error && <span  className=" absolute text-white px-3 py-3 mt-3 mx-8">{error}</span>) ||
            (warning && <span  className=" absolute text-white px-3 py-3 mt-3 mx-8">{warning}</span>))}
      </div>
    </div>
    )
  }

export default ReduxSelect