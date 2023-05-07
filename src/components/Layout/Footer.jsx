import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* <Image className='w-full' src='/assets/footer2.svg' width={200} height={200} alt='logo' /> */}
            <div className='bg-[rgba(255,255,255,0.2)] font-jost flex flex-col lg:flex-row w-full px-4 lg:px-40 pt-10 lg:pt-20 pb-8'>
                <div className="first lg:w-1/2">
                    <h1 className={`logo text-white font-jost font-extrabold text-6xl`}>Clip<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Surf</span> </h1>
                    <p className='text-white text-lg my-4'>
                        <span className='font-bold'>ClipSurf</span> is an AI-based search engine that fetches short videos from different platforms. Our mission is to help users find and discover the best short-form video content on the web.
                    </p>
                    <div className="contact text-white flex flex-col lg:flex-row lg:items-center">
                        <p className=''>For any queries, Contact us at : </p>
                        <Link className='flex items-center' href='mailto:clipsurf.developers@gmail.com'>
                            <FontAwesomeIcon className='mx-1' icon={faEnvelope} />
                            <p className='font-bold'> clipsurf.developers@gmail.com</p>
                        </Link>
                    </div>
                </div>
                <div className="second text-white mt-10 lg:mt-0 text-xl lg:w-1/2 flex flex-col lg:items-center">
                    <div>
                        <h1 className=' text-4xl pb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Developers</h1>
                        <p className='hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  hover:text-transparent hover:bg-clip-text text-white cursor-pointer transition-all duration-300'>
                            <Link href='https://www.linkedin.com/in/vishal-chaurasia-9a421022a/'>
                                Vishal Chaurasia
                            </Link>
                        </p>
                        <p className='hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  hover:text-transparent hover:bg-clip-text text-white cursor-pointer transition-all duration-300 py-1'>
                            <Link href='https://www.linkedin.com/in/chitransh-srivastava-37b0a0225/'>
                                Chitransh Srivastava
                            </Link>
                        </p>
                        <p className='hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  hover:text-transparent hover:bg-clip-text text-white cursor-pointer transition-all duration-300'>
                            <Link href='https://www.linkedin.com/in/sahil-khirwal-464466216/'>
                                Sahil Khirwal
                            </Link>
                        </p>
                        <div className="follow mt-8 flex items-center">
                            <p className='text-base'>Follow us on </p>
                            <Link href='https://twitter.com/ClipSurfHQ'>
                                <FontAwesomeIcon className='mx-1 hover:text-pink-500 text-white cursor-pointer transition-all duration-300' icon={faTwitter} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright px-4 pb-5 lg:pb-1 bg-[rgba(255,255,255,0.2)]">
                <p className='lg:text-center text-white pb-2'>© {new Date().getFullYear()} ClipSurf. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
