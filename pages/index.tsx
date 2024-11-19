import type { NextPage } from "next"
import Head from "next/head"
import Page_Wrapper from "../src/components/atoms/page_wrapper"
import Hello from "../src/components/organisms/hello"
import Setting from "../src/components/molecules/settings/settings"
import Benefits from "../src/components/organisms/benefits"
import Contact from "../src/components/molecules/contact/contact"
import Projects from "../src/components/organisms/projects"

import client from "../src/components/graphql/init"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import GET_PROJECTS from "../src/components/graphql/queries/projects"


export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await client.query({
    query: GET_PROJECTS,
  })

  const projects = data.projects

  return {
    props: { projects },
  }
}

const Home: NextPage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>leosh1d</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page_Wrapper>
        <div className="flex flex-col z-10 w-full items-center">
          <Hello />
        </div>
        <Setting />
        <Benefits />
        <Contact />
        <Projects projects={projects} />
      </Page_Wrapper>
    </>
  )
}

export default Home
