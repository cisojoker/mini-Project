import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import { useUser } from '@clerk/nextjs'

const Saved = () => {

    const router = useRouter()
    const { isLoaded, isSignedIn } = useUser()
    if (isLoaded && !isSignedIn) {
        router.push('/sign-in')
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <Image className='h-[60vh] w-full animate-up-down' src='/assets/nothing.svg' width={1920} height={1080} alt='nothing' />
                <p className='text-white text-center text-4xl lg:text-8xl lg:ml-32 mt-4 font-jost'>No saved videos found!</p>
                <p className='text-white text-center  lg:ml-32 mt-2 font-jost'>Click on heart icon to save videos!</p>
            </motion.div>
        </>
    )
}

export default Saved
