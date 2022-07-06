import React from 'react'
import DesignCarousel from './DesignCarousel'
import WhiteBannerConsole from './WhiteBannerConsole'

const ConsoleConfig = () => {
  return (
    <>
    <WhiteBannerConsole />
    <div className="row black-body console-config-body">
        <div className="col span-1-of-3">
            <h3>BODY</h3>
            <a>ADD</a>
            <p>300 LE</p>
        </div>
        <div className="col span-1-of-3">

        </div>
        <div className="col span-1-of-3">
            <h3>CONTROLLER</h3>
            <a>ADD</a>
            <p>25 LE Each</p>
        </div>
        <DesignCarousel/>

        <a className='next-btn' href='/logo'>CONFIRM</a>
    </div>
    </>
  )
}

export default ConsoleConfig