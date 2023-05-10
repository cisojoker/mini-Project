import Image from 'next/image'
import React from 'react'

const Spinner = () => {
    return (
        <div className='flex flex-col w-full mb-32 justify-center items-center'>
            <Image className='relative h-14 w-14' src='https://samherbert.net/svg-loaders/svg-loaders/three-dots.svg' width={500} height={500} alt='clip' />
            {/* <p className='font-roboto text-lg text-white' >Loading...</p> */}
        </div>
    )
}

export default Spinner
