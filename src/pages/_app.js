import Navbar from '@/components/Layout/Navbar'
import Waitlist from '@/components/Layout/Waitlist'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="waitlist p-3">
        <Waitlist />
      </div>
    </>
  )
}
