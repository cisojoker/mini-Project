import React, { Suspense, useState } from 'react'
import { motion } from "framer-motion"
import Button from '../Layout/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Link } from 'react-scroll'

const Hero = () => {

    return (
        <>
            <motion.div
                className="main_container overflow-hidden h-full lg:h-screen w-full px-5 lg:pl-48 lg:pt-10 mt-28 lg:mt-10 flex flex-col lg:flex-row items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className={`content order-2 lg:order-1 text-center lg:text-left  font-jost text-white lg:w-1/2`}>
                    {/* <span className={`text-4xl  md:text-4xl font-bold`}>Find the</span>
                    <span className={`text-7xl  md:text-8xl font-bold`}> perfect video answers</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> in seconds - experience the</span> */}
                    <span className={`text-7xl  md:text-8xl font-bold`}> Future of video search</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> with our</span>
                    <span className={`text-7xl  md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}> AI-powered search engine!</span>
                    <div className="button my-8">
                        <Button content="Join the waitlist!" destination='waitlist' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="image order-1 h-[30rem] w-[30rem] lg:h-full lg:order-2 lg:w-1/2">
                    <Image className='w-full' src='/assets/hero.png' width={500} height={500} alt='hero_girl' />
                </motion.div>
            </motion.div>
            <div className="scroll hidden lg:block absolute -mt-16 md:-mt-4 lg:-mt-32 animate-bounce cursor-pointer left-[47%] md:left-1/2 rounded-full border border-[rgba(255,255,255,0.4)]">
                <Link to='description' smooth={true} duration={500} >
                    <FontAwesomeIcon className='text-white text-xl font-light px-3 py-4' icon={faArrowDown} />
                </Link>
            </div>
        </>
    )
}

export default Hero
