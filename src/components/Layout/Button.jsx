import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Button = (props) => {
    return (
        <>
            <Link href={props.destination}>
                <motion.button
                    whileHover={{ y: -3, scale: 1.05, boxShadow: '0 0 10px rgba(255,255,255,0.3)' }}
                    className={`overflow-hidden border border-[rgba(255,255,255,0.4)] before:-translate-x-[12rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative inline-block before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 mx-1 rounded-md before:transition-all before:duration-500`}>
                    <span className={`relative font-roboto text-lg transition-all duration-500`}>{props.content}</span>
                </motion.button>
            </Link>
        </>
    )
}

export default Button
