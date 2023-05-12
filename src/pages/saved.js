import Saved from '@/components/Content/Saved'
import Alert from '@/components/Layout/Alert'
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
      <Alert />
      <div className="nothing">
        <Saved />
      </div>
    </>
  )
}

export default saved
