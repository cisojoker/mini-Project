import React, { useState } from 'react'
import { Jost, Roboto } from 'next/font/google'
import Spline from '@splinetool/react-spline'
import { motion } from "framer-motion"
import Spinner from './Spinner'

const jost = Jost({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ["700"] })

const Hero = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="main h-full lg:h-screen w-full px-10 lg:py-10 flex flex-col lg:flex-row items-center justify-center">
                <div className={`content ${roboto.className} text-white lg:w-1/2`}>
                    <span className={`text-4xl  md:text-4xl font-bold`}>Find the</span>
                    <span className={`text-7xl  md:text-8xl font-bold`}> perfect video answers</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> in seconds - experience the</span>
                    <span className={`text-7xl  md:text-8xl font-bold`}> future of video search</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> with our</span>
                    <span className={`text-7xl  md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}> AI-powered search engine!</span>
                    <div className="button my-4">
                        <button className={` ${roboto.className} bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 rounded-lg hover:-translate-y-1 shadow-2xl hover:shadow-slate-300 transition-all duration-300`}>
                            Join the waitlist!
                        </button>
                    </div>
                </div>
                <div className="image h-[40rem] lg:h-full pt-20 pl-10 lg:w-1/4">
                    <Spline
                        scene='https://prod.spline.design/La9uVOvlpiWn4trw/scene.splinecode'
                    />
                </div>

            </motion.div>
        </>
    )
}

export default Hero
