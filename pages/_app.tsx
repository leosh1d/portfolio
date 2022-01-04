import "../styles/font.css"
import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import "nprogress/nprogress.css"

import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
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
    <ThemeProvider attribute="class">
      <main className="flex flex-col bg-white dark:bg-black_dark ease-out-quad duration-200">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  )
}
export default MyApp
