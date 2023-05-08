import Saved from '@/components/Content/Saved'
import Transition from '@/components/Layout/Transition'
import Head from 'next/head'
import React from 'react'

const saved = () => {
  return (
    <>
      <Head>
        <title>Saved | ClipSurf</title>
      </Head>
      <Transition />
      <div className="nothing h-screen flex items-center justify-center">
        <Saved />
      </div>
    </>
  )
}

export default saved
