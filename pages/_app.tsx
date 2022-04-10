import "../styles/font.css"
import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import "nprogress/nprogress.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
import Router from "next/router"
import nProgress from "nprogress"
import type { AppProps } from "next/app"
import Head from "next/head"

nProgress.configure({ showSpinner: false })

Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

interface IRouteChainge {
  url: string
}

declare const window: any

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const handleRouteChange = ({ url }: IRouteChainge) => {
    window.gtag("config", "[Tracking ID]", {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <Head></Head>
      <main className="flex flex-col bg-white dark:bg-black_dark ease-out-quad duration-200">
        <Component {...pageProps} key={router.route} />
      </main>
    </ThemeProvider>
  )
}
export default MyApp
