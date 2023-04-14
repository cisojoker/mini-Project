import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const ComingSoon = () => {
    return (
        <>
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
         className="image">
            <Image className='h-[50vh] w-full animate-up-down' src="/assets/comingsoon.svg" alt="Coming Soon" width={1920} height={1080} />
            <p className='text-white text-center text-4xl lg:text-8xl lg:ml-32 mt-4 font-jost'>Coming S👁️👁️N...</p>
        </motion.div>
        </>
    )
}

export default ComingSoon
