import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';

const ComingSoon = () => {

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
                className="image">
                <Image className='h-[50vh] w-full animate-up-down' src="/assets/comingsoon.svg" alt="Coming Soon" width={1920} height={1080} />
                <p className='text-white text-center text-4xl lg:text-8xl lg:ml-32 mt-4 font-jost'>Coming S👁️👁️N...</p>
            </motion.div>
        </>
    )
}

export default ComingSoon
