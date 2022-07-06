import React from 'react'
import EventHandler from '../components/EventHandler'

const Home = () => {

    return (

        <div class="">
            <img src={'/assets/home1.png'} alt="home1"/>
            <div
                class="absolute bg-cutter bg-white h-screen w-screen -z-10 drop-shadow-white"></div>
            <div class="absolute h-20 w-full bg-white">.</div>
            <div
                class="absolute bg-cutter-sec bg-white opacity-70 top-extreme-x h-screen w-screen drop-shadow-white"></div>
            <div
                class="flex flex-col w-full justify-center items-center relative drop-shadow-cont">
                <div class="mx-40">
                    <div class="h-60 bg-white"></div>
                    <div class="flex w-full justify-center relative">
                        <h1
                            class="absolute font-bold left-16 leading-snug text-hero text-white drop-shadow-white mt-10">
                            CUSTO-<br/>MIZE<br/>YOUR LAPTOP
                        </h1>
                        <img
                            class="absolute drop-shadow-white bottom-120 left-44"
                            height="200"
                            width="200"
                            src={'/assets/home3-white.png'}
                            alt=""/>
                        <img
                            class="mix-blend-difference bg-cover overflow-visible"
                            src={ '/assets/home6-1.png'}
                            alt=""/>

                        <img
                            width="700"
                            hight="700"
                            class="absolute top-20 right-8 border-8 z-20 border-black"
                            src={ '/assets/home2.png' }
                            alt=""/>

                        <h1
                            class="absolute text-3xl bottom-1/3 right-24 z-20 font-bold text-white leading-snug tracking-widest">
                            Whatever
                            <span class="text-cyan-300">Y</span>our
                            <span class="text-cyan-300">Laptop</span>
                            <br/>
                            Whatever the
                            <span class="text-cyan-300">DESIGN Y</span>ou choose
                        </h1>

                        <button
                            class="absolute bottom-80 right-24 z-10 tracking-widest font-semibold text-white border-4 px-16 py-4 border-white rounded-md uppercase drop-shadow-white">
                            order now
                        </button>
                    </div>
                    <div>
                        <div class="flex flex-col w-full justify-center bg-white mb-40">
                            <div class="relative mx-20">
                                <img
                                    class="absolute top-1/2 left-1/4"
                                    src={ '/assets/home4-2.png'}
                                    alt=""/>
                                <h1 class="absolute font-bold left-1/3 text-hero uppercase">
                                    customize<br/>
                                    <span class="text-cyan-300">YOUR</span>
                                    console
                                </h1>
                                <img class="" src={'/assets/home4-1.png'} alt=""/>
                                <button
                                    class="absolute bottom-72 right-40 z-10 tracking-widest font-semibold text-white border-4 px-16 py-4 bg-black border-black rounded-md uppercase drop-shadow-black">
                                    order now
                                </button>
                            </div>
                            <div class="h-80"></div>
                            <h1 class="text-hero font-bold mx-20 z-10 drop-shadow-black">
                                GAMING EVENTS
                                <br/>
                                & TOURNAMENTS
                            </h1>

                            <div class="h-os-flat"></div>
                            <div class="h-os-flat"></div>
                        </div>
                        <button
                            class="absolute bottom-100 right-52 z-10 text-white border-4 px-16 py-4 tracking-widest font-semibold bg-cyan-400 border-cyan-400 rounded-md uppercase drop-shadow-black">
                            Know more
                        </button>
                    </div>
                </div>

                <img
                    class="absolute bottom-20 overflow-visible"
                    src={'/assets/home5.png'}
                    alt=""/>
            </div>

            <img
                class="fixed top-0 -z-50"
                src={'/assets/background.png' }
                alt=""/>
        </div>
    )
}

export default Home