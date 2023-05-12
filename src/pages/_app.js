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
import AlertState from '@/context/alert/AlertState';
import SavedState from '@/context/saved/SavedState';
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Navbar />
        <AlertState>
          <LoadingState>
            <QueryState>
              <VideoState>
                <SavedState>
                  <ShowVideoState>
                    <Component {...pageProps} />
                  </ShowVideoState>
                </SavedState>
              </VideoState>
            </QueryState>
          </LoadingState>
        </AlertState>
      </ClerkProvider>
      <Analytics />
      <Footer />
    </>
  )
}
