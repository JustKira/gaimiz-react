import React from 'react'
import ModelInput from '../components/ModelInput'
import VideoHolder from '../components/VideoHolder'
import WhiteBanner from '../components/WhiteBanner'

const ConsolePage1 = () => {
  return (
    <>
        <WhiteBanner title={"CUSTOMIZE YOUR CONSOLE"}/>
        <div className="row black-body">
            <ModelInput title={"Console Model"} option1={"Sony"} option2={"MODEL"} option3={"SLIM"} button={true} buttonLink={"/console-config"}/>
            <VideoHolder/>
        </div>
    </>
  )
}

export default ConsolePage1