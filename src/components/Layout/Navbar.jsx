import React, { useState } from 'react'
import Button from './Button'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from "framer-motion"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {

    const router = useRouter();
    const [navExpand, setNavExpand] = useState(false)

    const expandNav = () => {
        setNavExpand(!navExpand)
    }
    console.log(router.pathname)

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className='z-20 text-white font-jost fixed top-0 left-0 right-0 bg-black flex justify-between items-center px-5 md:px-10 py-4'>
                <div className="left w-1/4 lg:w-full ">
                    <Link href='/'>
                        <h1 className={`logo font-roboto font-extrabold text-2xl`}>Clip<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Surf</span> </h1>
                    </Link>
                </div>
                <div className="center lg:w-full hidden lg:block">
                    <ul className='flex items-center justify-center space-x-6 text-xl'>
                        <Link href='/'>
                            <li className={`hover:bg-[rgba(255,255,255,0.2)] ${router.pathname == '/' ? 'bg-[rgba(255,255,255,0.2)]' : ''}  p-1 px-4 rounded-md transition-all duration-300 cursor-pointer`}>Home</li>
                        </Link>
                        <Link href='/video'>
                            <li className={`hover:bg-[rgba(255,255,255,0.2)] ${router.pathname == '/video' ? 'bg-[rgba(255,255,255,0.2)]' : ''} p-1 px-4 rounded-md transition-all duration-300 cursor-pointer`}>Videos</li>
                        </Link>
                        <Link href='/about'>
                            <li className={`hover:bg-[rgba(255,255,255,0.2)] ${router.pathname == '/about' ? 'bg-[rgba(255,255,255,0.2)]' : ''} p-1 px-4 rounded-md transition-all duration-300 cursor-pointer`}>About</li>
                        </Link>
                        <Link href='/contact'>
                            <li className={`hover:bg-[rgba(255,255,255,0.2)] ${router.pathname == '/contact' ? 'bg-[rgba(255,255,255,0.2)]' : ''} p-1 px-4 rounded-md transition-all duration-300 cursor-pointer`}>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className="right w-3/4 lg:w-full flex justify-end">
                    <SignedIn>
                        <div className='pr-2 lg:pr-0'>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonPopoverCard: 'w-3/4 lg:w-1/4'
                                    }
                                }}
                            />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <Button content='Sign Up' destination="/sign-up" />
                        <Button content='Sign In' destination="/sign-in" />
                    </SignedOut>
                </div>
                <div className="hamburger relative -mr-2 ml-2 lg:hidden space-y-1">
                    <div onClick={expandNav} className={`${navExpand ? '-rotate-45 translate-y-[0.45rem]' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
                    <div onClick={expandNav} className={`${navExpand ? 'scale-0' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
                    <div onClick={expandNav} className={`${navExpand ? 'rotate-45 -translate-y-2' : ''} w-6 transition-all duration-300 rounded-full bg-white h-1`}></div>
                </div>
            </motion.nav >
            <div className={`expanded lg:hidden w-full text-white z-[15] h-screen flex items-center justify-center backdrop-blur-3xl fixed top-0 transition-all duration-500 ${navExpand ? '' : 'translate-x-[60rem]'}`}>
                <ul className={`flex text-2xl space-y-4 flex-col justify-center font-jost text-center items-center`}>
                    <li onClick={expandNav} className='cursor-pointer'><Link href='/'>Home</Link></li>
                    <li onClick={expandNav} className='cursor-pointer'><Link href='/video'>Videos</Link></li>
                    <li onClick={expandNav} className='cursor-pointer'><Link href='/about'>About</Link></li>
                    <li onClick={expandNav} className='cursor-pointer'><Link href='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
