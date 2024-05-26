import Image from "next/image";
import Hero from "@/components/Content/Hero";
import Description from "@/components/Description/Description";
import Head from "next/head";
import Transition from "@/components/Layout/Transition";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | NeuroCalm</title>
      </Head>
      <Transition />
      <Hero />
      <Description />
    </>
  );
}
