import React from 'react'
import EventHandler from '../components/EventHandler'

const Home = () => {

    return (

        <div className="">
            <img src={'/assets/home1.png'} className="cover-fill" alt="home1"/>
            <div
                className="absolute bg-cutter bg-white h-screen w-screen -z-10 drop-shadow-white"></div>
            <div className="absolute h-20 w-full bg-white">.</div>
            <div
                className="absolute bg-cutter-sec bg-white opacity-70 top-extreme-x h-screen w-screen drop-shadow-white"></div>
            <div
                className="flex flex-col w-full justify-center items-center relative drop-shadow-cont">
                <div className="mx-40">
                    <div className="h-60 bg-white"></div>
                    <div className="flex w-full justify-center relative">
                        <h1
                            className="absolute font-bold left-16 leading-snug text-hero-ratio text-white drop-shadow-white mt-10">
                            CUSTO-<br/>MIZE<br/>YOUR LAPTOP
                        </h1>
                        <img
                            className="absolute drop-shadow-white bottom-1/3 left-44 w-1/6"
                            src={'/assets/home3-white.png'}
                            alt=""/>
                        <img
                            className="mix-blend-difference bg-cover overflow-visible w-oversize-1"
                            src={ '/assets/home6-1.png'}
                            alt=""/>

                        <img
                            
                            className="absolute top-20 right-8 border-8 z-20 border-black w-im-1"
                            src={ '/assets/home2.png' }
                            alt=""/>

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
                            className="absolute bottom-1/4 right-24 z-10 tracking-widest font-semibold text-white border-4 px-16 py-4 border-white rounded-md uppercase drop-shadow-white">
                            order now
                        </button>
                    </div>
                    <div>
                        <div className="flex flex-col w-full justify-center bg-white mb-40">
                            <div className="relative mx-20">
                                <img
                                    className="absolute top-1/2 left-1/4"
                                    src={ '/assets/home4-2.png'}
                                    alt=""/>
                                <h1 className="absolute font-bold left-1/3 text-hero-ratio uppercase">
                                    customize<br/>
                                    <span className="text-cyan-300">YOUR</span>
                                    console
                                </h1>
                                <img className="" src={'/assets/home4-1.png'} alt=""/>
                                <button
                                    className="absolute bottom-72 right-40 z-10 tracking-widest font-semibold text-white border-4 px-16 py-4 bg-black border-black rounded-md uppercase drop-shadow-black">
                                    order now
                                </button>
                            </div>
                            <div className="h-80"></div>
                            <h1 className="text-hero font-bold mx-20 z-10 drop-shadow-black">
                                GAMING EVENTS
                                <br/>
                                & TOURNAMENTS
                            </h1>

                            <div className="h-os-flat"></div>
                            <div className="h-os-flat"></div>
                        </div>
                        <button
                            className="absolute bottom-100 right-52 z-10 text-white border-4 px-16 py-4 tracking-widest font-semibold bg-cyan-400 border-cyan-400 rounded-md uppercase drop-shadow-black">
                            Know more
                        </button>
                    </div>
                </div>

                <img
                    className="absolute bottom-20 overflow-visible"
                    src={'/assets/home5.png'}
                    alt=""/>
            </div>

            <img
                className="fixed top-0 -z-50"
                src={'/assets/background.png' }
                alt=""/>
        </div>
    )
}

export default Home