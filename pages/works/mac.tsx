import type { NextPage } from "next"
import Head from "next/head"
import Page_Wrapper from "../../src/components/atoms/page_wrapper"
import { useRouter } from "next/router"
import D_mak from "../../src/components/projects_dictionary/mak"

import Settings from "../../src/components/molecules/settings/settings"
import Contact from "../../src/components/molecules/contact/contact"

const Home: NextPage = () => {
  const lang = useRouter().locale || "en"

  return (
    <>
      <Head>
        <title>Mac</title>
        <meta name="description" lang="en" content="A platform for Mac`s consultation and T-games" />
        <meta name="description" lang="ru" content="Платформа для консультаци Мак и проведения Т-игр" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page_Wrapper>
        <Settings />
        <Contact />
        <div className="flex-col my-24 w-full px-12">
          <D_mak lang={lang} />
        </div>
      </Page_Wrapper>
    </>
  )
}

export default Home
