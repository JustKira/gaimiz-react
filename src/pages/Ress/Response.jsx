import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const Response = ({close, head, info}) => {

    return (
        <div
            className=' fixed top-0 left-0 flex justify-center items-center z-30 h-screen w-screen'>

            <div
                className='flex relative justify-center items-start text-black bg-white opacity-100 w-1/2 lg:w-1/3 z-50 pb-10 rounded-3xl'>
                <div
                    className='hidden lg:block absolute top-4 right-4 text-black z-50 duration-300 hover:text-cyan-500 cursor-pointer'
                    onClick={() => close()}><FontAwesomeIcon size="2xl" icon="circle-xmark"/>
                </div>

                <div
                    className='lg:hidden absolute top-4 right-4 text-black z-50 duration-300 hover:text-cyan-500 cursor-pointer'
                    onClick={() => close()}><FontAwesomeIcon size="lg" icon="circle-xmark"/>
                </div>

                <div className='flex flex-col items-center px-4'>
                    <h1 className='m-4 md:m-10 text-xl lg:text-4xl font-bold uppercase'>
                        {head}</h1>
                    <p className='text-sm lg:text-base'>
                        {info}
                    </p>
                </div>
            </div>
            <div
                className=' top-0 left-0 absolute bg-black w-screen h-screen opacity-30  z-30'></div>
        </div>
    )
}

export default Response