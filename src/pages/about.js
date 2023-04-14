import ComingSoon from '@/components/Layout/ComingSoon'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>About | ClipSurf</title>
      </Head>
      <div className="comingsoon h-screen flex items-center justify-center">
        <ComingSoon />
      </div>
    </>
  )
}

export default about
