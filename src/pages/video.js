import ComingSoon from '@/components/Layout/ComingSoon'
import Transition from '@/components/Layout/Transition'
import Head from 'next/head'
import React from 'react'

const video = () => {
  return (
    <>
      <Head>
        <title>Videos | ClipSurf</title>
      </Head>
      <Transition />
      <div className="comingsoon h-screen flex items-center justify-center">
        <ComingSoon />
      </div>
    </>
  )
}

export default video
