import React from 'react'
import LogoSelect from '../components/LogoSelect'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'

const LogoPage1 = ({nextPage, previousPage, order}) => {
    return (
        <div>
            <div className="w-full flex justify-center items-center">
<div className='bg-black h-full px-20 my-10'>
<LogoSelect>
                    <button
                        onClick={() => previousPage()}
                        className=' text-white m-2 mt-10 left-10 bottom-10 border-4  px-8 md:px-12 py-2 tracking-widest text-sm md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black '>
                        Back
                    </button>
                    <button
                        onClick={() => nextPage()}
                        className=' text-white m-2 mt-10 right-10 md:right-20 bottom-10 border-4 px-8 md:px-12 py-2 tracking-widest text-sm  md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black'>
                        Next
                    </button>

                </LogoSelect>
</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {}

export default compose(reduxForm({request: 'laptop_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(LogoPage1)