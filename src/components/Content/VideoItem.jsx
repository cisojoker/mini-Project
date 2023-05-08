import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const VideoItem = (props) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="videoItem rounded-xl p-2 -my-3 lg:-my-2 w-full md:w-1/2 lg:w-1/3">
                <iframe className='rounded-xl bg-[rgba(255,255,255,0.2)] p-2 w-full shadow-2xl shadow-black' width="350" height="300" src={`https://www.youtube.com/embed/${props.ID}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button className='bg-black border border-[rgba(255,255,255,0.2)] p-1 px-2 rounded-lg relative bottom-16 left-4'>
                    <FontAwesomeIcon className='text-white cursor-pointer hover:text-red-500 hover:scale-125 duration-300 transition-all' title='Save' icon={faHeart} />
                </button>
            </motion.div>
        </>
    )
}

export default VideoItem
