import Signin from "@/components/Layout/SignIn";
import Transition from "@/components/Layout/Transition";
import Head from "next/head";
import React from "react";

const signin = () => {
  return (
    <>
      <Head>
        <title>NeuroCalm | Sign In</title>
      </Head>
      <Transition />
      <Signin />
    </>
  );
};

export default signin;
