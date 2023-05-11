import Navbar from '@/components/Layout/Navbar'
// import Waitlist from '@/components/Layout/Waitlist'
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from "@clerk/nextjs";
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@/components/Layout/Footer';
import QueryState from '@/context/query/QueryState';
import VideoState from '@/context/video/VideoState';
import LoadingState from '@/context/loading/LoadingState';
import ShowVideoState from '@/context/showVideo/ShowVideoState';
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Navbar />
        <LoadingState>
          <QueryState>
            <VideoState>
              <ShowVideoState>
                <Component {...pageProps} />
              </ShowVideoState>
            </VideoState>
          </QueryState>
        </LoadingState>
      </ClerkProvider>
      <Analytics />
      <Footer />
    </>
  )
}
