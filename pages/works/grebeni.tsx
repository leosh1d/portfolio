import type { NextPage } from "next"
import Head from "next/head"
import Page_Wrapper from "../../src/components/atoms/page_wrapper"
import { useRouter } from "next/router"
import D_grebeni from "../../src/components/projects_dictionary/grebeni"

import Settings from "../../src/components/molecules/settings/settings"
import Contact from "../../src/components/molecules/contact/contact"

const Home: NextPage = () => {
  const lang = useRouter().locale || "en"

  return (
    <>
      <Head>
        <title>Grebeni</title>
        <meta name="description" lang="en" content="Form of skipass refill for the ski resort." />
        <meta name="description" lang="ru" content="Форма пополнения скипасса для горнолыжного курорта." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page_Wrapper>
        <Settings />
        <Contact />
        <div className="flex-col my-24 w-full px-12">
          <D_grebeni lang={lang} />
        </div>
      </Page_Wrapper>
    </>
  )
}

export default Home
