import Image from 'next/image'
import Hero from '@/components/Content/Hero'
import Description from '@/components/Description/Description'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ClipSurf</title>
      </Head>
      <Hero />
      <Description />
    </>
  )
}
