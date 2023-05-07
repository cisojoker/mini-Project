import React from 'react'
import { motion } from 'framer-motion'

const VideoItem = (props) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="videoItem rounded-xl p-2 w-full md:w-1/2 lg:w-1/3">
                <iframe className='rounded-xl bg-[rgba(255,255,255,0.2)] p-2 w-full shadow-2xl shadow-black' width="350" height="300" src={`https://www.youtube.com/embed/${props.ID}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </motion.div>
        </>
    )
}

export default VideoItem
