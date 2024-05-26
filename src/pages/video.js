import Search from "@/components/Content/Search";
import Alert from "@/components/Layout/Alert";
import Transition from "@/components/Layout/Transition";
import Head from "next/head";
import React from "react";

const video = () => {
  return (
    <>
      <Head>
        <title>Videos | NeuroCalm</title>
      </Head>
      <Transition />
      <Alert />
      <div className="">
        <Search />
      </div>
    </>
  );
};

export default video;
