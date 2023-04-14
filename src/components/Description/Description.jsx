import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Description = () => {

    const [ref1, inView1] = useInView({
        threshold: 0.5, // trigger animation when the element is 50% in view
        triggerOnce: true, // only trigger once
    });
    const [ref2, inView2] = useInView({
        threshold: 0.5, // trigger animation when the element is 50% in view
        triggerOnce: true, // only trigger once
    });
    const [ref3, inView3] = useInView({
        threshold: 0.5, // trigger animation when the element is 50% in view
        triggerOnce: true, // only trigger once
    });

    const listVariants1 = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.4,
            },
        },
    };

    const listVariants2 = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.4,
            },
        },
    };

    return (
        <>
            <div id='description' className="container py-12 lg:pt-24 px-10 lg:px-0 lg:mx-auto">
                <h1 className='text-7xl  lg:text-8xl font-jost font-bold text-white lg:ml-20'>Features</h1>
                <div className="description flex flex-col space-y-10">
                    <div className="list1 overflow-hidden w-full flex flex-col lg:flex-row items-center justify-center">
                        <motion.div
                            ref={ref1}
                            variants={listVariants1}
                            initial="hidden"
                            animate={inView1 ? "visible" : "hidden"}
                            className="text order-2 lg:order-1 font-jost text-white space-y-8 mt-12 lg:w-1/2">
                            <p className='relative text-5xl lg:text-7xl'>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                    <span className="relative text-white">Short videos</span>
                                </span>
                                <span className='relative'> on any topic</span>
                            </p>
                            <p className=' text-3xl lg:text-4xl '>
                                Our search engine retrieves short videos from multiple sources.
                            </p>
                        </motion.div>
                        <motion.div
                            ref={ref1}
                            variants={listVariants2}
                            initial="hidden"
                            animate={inView1 ? "visible" : "hidden"}
                            className="img mt-10 lg:mt-0 order-1 lg:order-2 relative">
                            <Image className='relative animate-up-down' src='/assets/search-Easy.png' width={500} height={500} alt='searchEasy' />
                            <Image className='absolute top-20 -z-10' src='/assets/blob.svg' width={500} height={500} alt='searchEasy' />
                        </motion.div>
                    </div>
                    <div className="list2 overflow-hidden w-full flex flex-col lg:flex-row items-center justify-center">
                        <motion.div
                            ref={ref2}
                            variants={listVariants2}
                            initial="hidden"
                            animate={inView2 ? "visible" : "hidden"}
                            className="text order-2 font-jost text-white space-y-8 mt-12 lg:w-1/2">
                            <p className='relative text-5xl lg:text-7xl'>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FF8D44] relative inline-block">
                                    <span className="relative text-white">User-friendly</span>
                                </span>
                                <span className='relative'> interface</span>
                            </p>
                            <p className=' text-3xl lg:text-4xl '>
                                Easy-to-use interface allows you to quickly browse & find the videos you need
                            </p>
                        </motion.div>
                        <motion.div
                            ref={ref2}
                            variants={listVariants1}
                            initial="hidden"
                            animate={inView2 ? "visible" : "hidden"}
                            className="img order-1 relative">
                            {/* <Image className='relative animate-up-down' src='/assets/userFriendly.png' width={500} height={500} alt='searchEasy' /> */}
                            <img className='relative animate-up-down lg:mr-10' src='/assets/user-Friendly.png' width={500} height={500} alt='searchEasy' />
                        </motion.div>
                    </div>
                    <div className="list3 overflow-hidden w-full flex flex-col lg:flex-row items-center justify-center">
                        <motion.div
                            ref={ref3}
                            variants={listVariants1}
                            initial="hidden"
                            animate={inView3 ? "visible" : "hidden"}
                            className="text order-2 lg:order-1 font-jost text-white space-y-8 mt-12 lg:w-1/2">
                            <p className='relative text-5xl lg:text-7xl'>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#74B687] relative inline-block">
                                    <span className="relative text-white">Advanced</span>
                                </span>
                                <span className='relative'> video search</span>
                            </p>
                            <p className=' text-3xl lg:text-4xl '>
                                Video search engine utilizes advanced technology for efficient and accurate video searching.
                            </p>
                        </motion.div>
                        <motion.div
                            ref={ref3}
                            variants={listVariants2}
                            initial="hidden"
                            animate={inView3 ? "visible" : "hidden"}
                            className="img order-1 lg:order-2 relative">
                            <Image className='relative animate-up-down' src='/assets/advanced.svg' width={500} height={500} alt='searchEasy' />
                        </motion.div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Description
