import React from "react"
import Heading from "../atoms/heading"
import Subheading from "../atoms/subheading"
import { useRouter } from "next/router"
import { d_hello } from "../dictionary"

const Hello = () => {
  const lang = useRouter().locale || "en"

  return (
    <div className="flex flex-row justify-between w-full container">
      <div className="flex flex-col items-center container justify-center py-56 lg:py-80">
        <div className="flex-flex-col items-center">
          <Subheading additional_class="text-left px-0 m-0 font-normal md:text-5xl lg:text-6x long">
            {d_hello.name[lang]}
          </Subheading>
          <Heading additional_class="m-0 md:text-5xl lg:text-6xl">
            <span className="text-main">Frontend </span>
            {d_hello.dev[lang]}
          </Heading>
          {/*<Heading additional_class="m-0 text-right my-1 md:text-5xl lg:text-6xl">*/}
          {/*  <span className="text-main">UI UX </span>*/}
          {/*  {d_hello.design[lang]}*/}
          {/*</Heading>*/}
        </div>
      </div>
    </div>
  )
}

export default Hello
