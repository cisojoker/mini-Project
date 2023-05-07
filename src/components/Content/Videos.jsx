import React from 'react'
import VideoItem from './VideoItem'
import { useRouter } from 'next/router'
import { useUser } from '@clerk/nextjs'

const Videos = () => {

  const router = useRouter()
  const { isLoaded, isSignedIn } = useUser()
  if (isLoaded && !isSignedIn) {
    router.push('/sign-in')
  }

  return (
    <>
      <div className="filler pt-20" id="videos"></div>
      <div className='bg-[rgba(255,255,255,0.2) flex flex-wrap mb-40'>
        <VideoItem ID='UrIaQbIK2E4' />
        <VideoItem ID='UrIaQbIK2E4' />
        <VideoItem ID='UrIaQbIK2E4' />
        <VideoItem ID='UrIaQbIK2E4' />
        <VideoItem ID='UrIaQbIK2E4' />
        <VideoItem ID='UrIaQbIK2E4' />
      </div>
    </>
  )
}

export default Videos
