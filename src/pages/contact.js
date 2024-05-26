import Contact from "@/components/Layout/Contact";
import Transition from "@/components/Layout/Transition";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | NeuroCalm</title>
      </Head>
      <Transition />
      <Contact />
    </>
  );
};

export default contact;
