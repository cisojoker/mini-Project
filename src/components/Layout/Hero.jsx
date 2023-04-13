import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from "framer-motion"
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="main h-full lg:h-screen w-full px-10 lg:py-10 mt-20 lg:mt-10 flex flex-col lg:flex-row items-center justify-center">
                <div className={`content font-roboto text-white lg:w-1/2`}>
                    <span className={`text-4xl  md:text-4xl font-bold`}>Find the</span>
                    <span className={`text-7xl  md:text-8xl font-bold`}> perfect video answers</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> in seconds - experience the</span>
                    <span className={`text-7xl  md:text-8xl font-bold`}> future of video search</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> with our</span>
                    <span className={`text-7xl  md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}> AI-powered search engine!</span>
                    <div className="button my-8">
                            <Button content="Join the waitlist!" destination='waitlist' />
                    </div>
                </div>
                <div className="image h-[40rem] lg:h-full md:pt-10 pl-10 lg:w-1/4">
                    <Spline
                        scene='https://prod.spline.design/La9uVOvlpiWn4trw/scene.splinecode'
                    />
                </div>
            </motion.div>
            <div className="scroll hidden lg:block absolute -mt-16 md:-mt-4 lg:-mt-32 animate-bounce cursor-pointer left-[47%] md:left-1/2 rounded-full border border-[rgba(255,255,255,0.4)]">
                <FontAwesomeIcon className='text-white text-xl font-light px-3 py-4' icon={faArrowDown} />
            </div>
        </>
    )
}

export default Hero
