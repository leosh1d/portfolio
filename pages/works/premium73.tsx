import type { NextPage } from "next"
import Head from "next/head"
import Page_Wrapper from "../../src/components/atoms/page_wrapper"
import { useRouter } from "next/router"
import D_premium73 from "../../src/components/projects_dictionary/premium73"

import Settings from "../../src/components/molecules/settings/settings"
import Contact from "../../src/components/molecules/contact/contact"

const Home: NextPage = () => {
  const lang = useRouter().locale || "en"

  return (
    <>
      <Head>
        <title>Premium73</title>
        <meta name="description" lang='en' content="Лендинг для стоматологии" />
        <meta name="description" lang="ru" content="Landing page for dental clinic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page_Wrapper>
        <Settings />
        <Contact />
        <div className="flex-col my-24 w-full px-12">
          <D_premium73 lang={lang} />
        </div>
      </Page_Wrapper>
    </>
  )
}

export default Home
