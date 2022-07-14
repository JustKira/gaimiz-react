import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import EventHandler from '../components/EventHandler'
import Response from './Ress/Response'
import ResponseWButton from './Ress/ResponseWButton'

const Home = () => {

    return (

        <div className="w-screen overflow-x-hidden">
            <div className='flex justify-center'>
                <img src={'/assets/home1.png'} className="w-screen z-20" alt="home1"/></div>
            <div
                className="absolute bg-cutter bg-white h-screen w-screen z-10 drop-shadow-white"></div>
            <div className="absolute h-screen top-32 w-full z-10 bg-white">.</div>
            <div
                className="absolute bg-cutter-sec hidden md:block bg-white opacity-70 top-extreme-x h-screen w-screen drop-shadow-white"></div>

            <div
                className="flex flex-col w-full z-20 justify-center items-center relative drop-shadow-cont">
                <div className="mx-40">
                    <div className="h-14 md:h-40 lg:h-60 bg-white"></div>
                    <div className="flex w-full justify-center relative ">
                        <h1
                            className="absolute font-bold top-32 md:top-0 left-1/4 translate-x-2 md:translate-x-0 md:left-16 text-3xl leading-snug md:text-hero-ratio text-white drop-shadow-white mt-10">
                            CUSTO-<br/>MIZE<br/>YOUR LAPTOP
                        </h1>
                        <img
                            className="absolute drop-shadow-white bottom-52 left-52 w-32 md:bottom-1/3 md:left-44 md:w-1/6"
                            src={'/assets/home3-white.png'}
                            alt="home3-white"/>
                        <img
                            className="mix-blend-difference bg-cover z-10 overflow-visible w-full lg:w-oversize-1"
                            src={'/assets/home6-1.png'}
                            alt="home6-1"/>

                        <img
                            className="absolute top-40 md:top-20 right-1/4  -translate-x-2 md:translate-x-0  md:right-8 border-4 lg:border-8 z-20 w-44 border-black md:w-im-1"
                            src={'/assets/home2.png'}
                            alt="home2"/>

                        <h1
                            className="absolute text-3xl bottom-1/3 right-24 hidden z-20 font-bold text-white leading-snug tracking-widest xl:block">
                            Whatever
                            <span className="text-cyan-300">Y</span>our
                            <span className="text-cyan-300">Laptop</span>
                            <br/>
                            Whatever the
                            <span className="text-cyan-300">DESIGN Y</span>ou choose
                        </h1>

                        <button
                            className="absolute bottom-1/4 right-52 md:right-24 z-10 tracking-widest font-semibold text-ssm md:text-base text-white border-4 px-8 md:px-16 py-3 md:py-4 border-white rounded-md uppercase drop-shadow-white">
                            <Link to='/laptop'>order now</Link>
                        </button>
                    </div>

                    {/* Section # CONSOLE # */}

                    <div>
                        <div className="flex flex-col w-full justify-center bg-white mb-40">
                            <div className="relative mx-20">
                                <img
                                    className=" w-1/4 md:w-80 absolute top-1/2 z-10 left-1/3 md:left-52"
                                    src={'/assets/home4-2.png'}
                                    alt=""/>
                                <h1
                                    className="absolute font-bold text-xl md:leading-12 top-20 md:top-10 translate-x-4 md:translate-x-0 right-1/4 md:right-0 md:left-1/3 md:text-hero-ratio uppercase">
                                    customize<br/>
                                    <span className="text-cyan-300">YOUR
                                    </span>
                                    console
                                </h1>

                                <div className='flex justify-center items-center md:block'>
                                    <img
                                        className="w-1/4 md:w-1/3 -translate-x-20 md:translate-x-0"
                                        src={'/assets/home4-1.png'}
                                        alt=""/>
                                </div>
                                <button
                                    className="absolute bottom-1/4 right-1/4 translate-x-6 md:translate-x-52 md:bottom-1/3 md:left-42 z-10 tracking-widest font-semibold text-ssm md:text-base text-white md:border-4 px-8 md:px-16 py-3 md:py-4 bg-black md:border-black rounded-md uppercase drop-shadow-black">
                                    <Link to='/console'>order now</Link>
                                </button>

                            </div>
                            <div className="h-80"></div>
                            <h1
                                className="text-hero text-white md:text-black font-bold mx-20 z-10 md:drop-shadow-black">
                                GAMING EVENTS
                                <br/>
                                & TOURNAMENTS
                            </h1>
                            <h1
                                className="absolute md:hidden left-1/2 -translate-x-52 text-4xl font-bold mx-20 z-10 drop-shadow-black">
                                GAMING EVENTS
                                <br/>
                                & TOURNAMENTS
                            </h1>
                            <div className="h-0 md:h-os-flat"></div>
                            <div className="h-0 md:h-os-flat"></div>
                        </div>
                        <button
                            className="absolute bottom-52 md:bottom-100 right-10 md:right-52 z-10 text-white border-4 px-16 py-4 tracking-widest font-semibold bg-cyan-400 border-cyan-400 rounded-md uppercase drop-shadow-black">
                            Know more
                        </button>
                    </div>
                </div>

                <img
                    className="absolute bottom-64 md:bottom-20 overflow-visible"
                    src={'/assets/home5.png'}
                    alt=""/>
            </div>
        </div>
    )
}

export default Home