import Navbar from "@/components/Layout/Navbar";
// import Waitlist from '@/components/Layout/Waitlist'
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Layout/Footer";
import QueryState from "@/context/query/QueryState";
import VideoState from "@/context/video/VideoState";
import LoadingState from "@/context/loading/LoadingState";
import ShowVideoState from "@/context/showVideo/ShowVideoState";
import AlertState from "@/context/alert/AlertState";
import SavedState from "@/context/saved/SavedState";
import Head from "next/head";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="NeuroCalm is an AI-powered search engine that finds and fetches short videos from various platforms. Discover new and exciting content easily with NeuroCalm's intuitive search and save your favorite videos from different platforms with ease!"
        />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="NeuroCalm, AI, search engine, short videos, platforms, save"
        />
        <meta name="author" content="Madhur Verma" />
        <meta name="robots" content="index, follow" />
      </Head>
      <ClerkProvider {...pageProps}>
        <Navbar />
        <AlertState>
          <LoadingState>
            <QueryState>
              <SavedState>
                <ShowVideoState>
                  <VideoState>
                    <Component {...pageProps} />
                  </VideoState>
                </ShowVideoState>
              </SavedState>
            </QueryState>
          </LoadingState>
        </AlertState>
      </ClerkProvider>
      <Analytics />
      <Footer />
    </>
  );
}
