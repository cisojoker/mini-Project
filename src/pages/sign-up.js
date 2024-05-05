import Signup from "@/components/Layout/SignUp";
import Transition from "@/components/Layout/Transition";
import Head from "next/head";
import React from "react";

const signup = () => {
  return (
    <>
      <Head>
        <title>NeuroCalm | Sign Up</title>
      </Head>
      <Transition />
      <Signup />
    </>
  );
};

export default signup;
