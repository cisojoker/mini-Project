import Navbar from '@/components/Layout/Navbar'
// import Waitlist from '@/components/Layout/Waitlist'
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from "@clerk/nextjs";
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@/components/Layout/Footer';
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Navbar />
        <Component {...pageProps} />
      </ClerkProvider>
      <Analytics />
      <Footer />
    </>
  )
}
