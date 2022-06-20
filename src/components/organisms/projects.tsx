import React from "react"
import Heading from "../atoms/heading"
import Subheading from "../atoms/subheading"
import { useRouter } from "next/router"
import { d_projects } from "../dictionary"
import Project from "./project"

import { InferGetStaticPropsType } from "next"

import { getStaticProps } from "../../../pages/index"

type locObj = {
  content: string
  locale: string
}

function Projects({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  const lang = useRouter().locale || "en"

  return (
    <div className="bg-gray_medium w-full dark:bg-black_medium duration-200 transition-colors lg:mt-4">
      <div className="container mx-auto my-8">
        <div className="p-4 lg:p-68 mb-4">
          <Heading additional_class="px-0 opacity-25 text-xl sm:text-2xl lg:text-3xl">
            {d_projects.heading[lang]}
          </Heading>
          <Subheading additional_class="lg:text-5xl lg:py-2 sm:text-3xl">{d_projects.subheading[lang]}</Subheading>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-8 gap-4 w-full px-4 container">
          {projects
            .slice(0)
            .reverse()
            .map((content: InferGetStaticPropsType<typeof getStaticProps>, index: number) => {
              const md = content.localizations.filter((object: locObj) => object.locale === lang)[0].content
              return (
                <Project
                  src={content.preview.url}
                  title={content.title}
                  stack={content.stack}
                  md={md}
                  width={content.preview.width}
                  height={content.preview.height}
                  key={index}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Projects
