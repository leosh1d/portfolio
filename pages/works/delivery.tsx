import type { NextPage } from "next"
import Head from "next/head"
import Page_Wrapper from "../../src/components/atoms/page_wrapper"
import { useRouter } from "next/router"
import D_delivery from "../../src/components/projects_dictionary/delivery"

import Settings from "../../src/components/molecules/settings/settings"
import Contact from "../../src/components/molecules/contact/contact"

const Home: NextPage = () => {
  const lang = useRouter().locale || "en"

  return (
    <>
      <Head>
        <title>Delivery</title>
        <meta name="description" lang="en" content="Food delivery service" />
        <meta name="description" lang="ru" content="Сервис доставки еды" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page_Wrapper>
        <Settings />
        <Contact />
        <div className="flex-col my-24 w-full px-12">
          <D_delivery lang={lang} />
        </div>
      </Page_Wrapper>
    </>
  )
}

export default Home
