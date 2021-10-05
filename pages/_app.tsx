import "../styles/font.css"
import "../styles/globals.css"
import "../styles/header.css"
import "tailwindcss/tailwind.css"
import "nprogress/nprogress.css"
import Header from "../src/components/molecules/header"

import { useRouter } from "next/router"

import { AnimatePresence } from "framer-motion"
import Router from "next/router"
import nProgress from "nprogress"
import type { AppProps } from "next/app"

nProgress.configure({ showSpinner: false })

Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </main>
  )
}
export default MyApp
