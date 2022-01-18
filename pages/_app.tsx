import "../styles/font.css"
import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import "nprogress/nprogress.css"

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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Source+Code+Pro:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col bg-white dark:bg-black_dark ease-out-quad duration-200">
        <Component {...pageProps} key={router.route} />
      </main>
    </ThemeProvider>
  )
}
export default MyApp
