import React from 'react'
import { motion } from 'framer-motion';

const Transition = () => {
    return (
        <>
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-slate-600' />
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-white' />
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#EC4899]' />
        </>
    )
}

export default Transition
