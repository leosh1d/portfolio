import React from "react"
import Heading from "../atoms/heading"
import Subheading from "../atoms/subheading"
import { useRouter } from "next/router"
import { d_projects } from "../dictionary"
import Img from "../atoms/img"
import braces from "../../img/braces.png"
import delivery from "../../img/delivery.png"
import mak from "../../img/mak.png"
import grebeni from "../../img/grebeni.png"
import Link from "next/link"

interface Wrapper {
  children: React.ReactNode
}

interface link_props {
  href: string
  img: StaticImageData
}

const Img_wrapper = ({ children }: Wrapper) => {
  return (
    <div className="rounded-3xl overflow-hidden relative opacity-50 hover:opacity-100 transition-opacity duration-200">
      {children}
    </div>
  )
}

const Link_img = ({ href, img }: link_props) => {
  return (
    <Link passHref href={href} scroll={false}>
      <a>
        <Img_wrapper>
          <Img src={img} alt="href"></Img>
        </Img_wrapper>
      </a>
    </Link>
  )
}

const Projects = () => {
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
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-8 gap-4 flex-col w-full px-4 container">
          <Link_img href="/works/premium73" img={braces} />
          <Link_img href="/works/delivery" img={delivery} />
          <Link_img href="/works/grebeni" img={grebeni} />
          <Link_img href="/works/mak" img={mak} />
        </div>
      </div>
    </div>
  )
}

export default Projects
