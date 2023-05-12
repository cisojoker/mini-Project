import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '@clerk/nextjs'
import savedContext from '@/context/saved/savedContext'
import alertContext from '@/context/alert/alertContext'

const VideoItem = (props) => {

    const { user } = useUser()
    const SavedContext = useContext(savedContext)
    const { saved, setSaved, fetchSavedVideos } = SavedContext
    const AlertContext = useContext(alertContext)
    const { showAlert } = AlertContext

    const handleLike = async (ID) => {
        if (saved.includes(ID))
            return showAlert('failure', 'Video already saved!')

        const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/liked/${user.primaryEmailAddress.emailAddress}/${ID}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json();
        showAlert(json.status, 'Video added to your liked videos!')
        fetchSavedVideos()
    }

    const handleUnsave = async (ID) => {
        const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/remove/${user.primaryEmailAddress.emailAddress}/${ID}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json();
        showAlert(json.status, 'Video removed from your liked videos!')
        fetchSavedVideos()
    }

    // const fetchSavedVideos = async () => {
    //     const response = await fetch(`https://clipsurfmainbackend-production.up.railway.app/api/saved/${user.primaryEmailAddress.emailAddress}`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     const json = await response.json();
    //     setSaved(json.data)
    // }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="videoItem rounded-xl p-2 -my-4 lg:-my-3 w-full md:w-1/2 lg:w-1/3">
                <iframe className='rounded-xl bg-[rgba(255,255,255,0.2)] p-2 w-full shadow-2xl shadow-black' width="350" height="300" src={`https://www.youtube.com/embed/${props.ID}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {
                    saved.includes(props.ID) ?
                        <button onClick={() => { handleUnsave(props.ID) }} className='bg-black border border-[rgba(255,255,255,0.2)] p-1 px-2 rounded-lg relative bottom-16 left-4'>
                            <FontAwesomeIcon className='text-white cursor-pointer hover:text-red-500 hover:scale-125 duration-300 transition-all' title='Unsave' icon={faHeartBroken} />
                        </button> :
                        <button onClick={() => { handleLike(props.ID) }} className='bg-black border border-[rgba(255,255,255,0.2)] p-1 px-2 rounded-lg relative bottom-16 left-4'>
                            <FontAwesomeIcon className='text-white cursor-pointer hover:text-red-500 hover:scale-125 duration-300 transition-all' title='Save' icon={faHeart} />
                        </button>
                }
            </motion.div>
        </>
    )
}

export default VideoItem
