import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'

const LogoPageConsole = ({nextPage, previousPage}) => {
    return (
        <div>
            <div className="row black-body">
                <div className='logo-select'>
                    <div className='row'>
                        <h4>Do you want the brand logo printed?</h4>
                    </div>
                    <div className='row logo-btns'>
                        <div className="col span-1-of-2">
                            <Field
                                className='hidden'
                                component="input"
                                type="radio"
                                id={'wlogo'}
                                name="withLogo"
                                value="True"/>
                            <label for="wlogo"><img src="assets/white.PNG" alt='Logo on'/></label>
                            <h4>WITH LOGO PRINTED ON SKIN</h4>
                        </div>
                        <div className="col span-1-of-2">
                            <Field
                                className='hidden'
                                component="input"
                                type="radio"
                                id={'wologo'}
                                name="withLogo"
                                value="False"/>
                            <label for="wologo"><img src="assets/white.PNG" alt='Logo on'/></label>
                            <h4>WITHOUT LOGO PRINTED ON SKIN</h4>
                        </div>
                        <div>
                            <button
                                onClick={() => previousPage()}
                                className=' text-white m-2 mt-10 left-10 bottom-10 border-4  px-8 md:px-12 py-2 tracking-widest text-sm md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black 'S >
                                Back
                            </button>
                            <button
                                onClick={() => nextPage()}
                                className=' text-white m-2 mt-10 right-10 md:right-20 bottom-10 border-4 px-8 md:px-12 py-2 tracking-widest text-sm  md:text-lg font-semibold z-10 bg-cyan-400 border-cyan-400 rounded-xl uppercase drop-shadow-black'>
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {}

export default compose(reduxForm({request: 'console_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(LogoPageConsole)