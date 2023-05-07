import Search from '@/components/Content/Search'
import Videos from '@/components/Content/Videos'
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
      <div className="">
        <Search />
        <Videos />
      </div>
    </>
  )
}

export default video
