import type { NextPage } from "next"
import Head from "next/head"

import Page_Wrapper from "../src/components/atoms/page_wrapper"
import Background from "../src/components/organisms/background"
import Hello from "../src/components/organisms/hello"
import Skills from "../src/components/organisms/skills"
import Contact from "../src/components/organisms/contact"

import Parallax_Wrapper from "../src/components/atoms/parallax_wrapper"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>leosh1d</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page_Wrapper>
        <Background />
        <Parallax_Wrapper>
          <Hello />
        </Parallax_Wrapper>
        <Parallax_Wrapper>
          <Skills />
        </Parallax_Wrapper>

        <Parallax_Wrapper>
          <Contact />
        </Parallax_Wrapper>
      </Page_Wrapper>
    </>
  )
}

export default Home