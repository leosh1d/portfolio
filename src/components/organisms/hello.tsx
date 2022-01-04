import React from "react"
import Heading from "../atoms/heading"
import Subheading from "../atoms/subheading"
import { useRouter } from "next/router"
import Motion_Wrapper from "../atoms/motion_wrapper"
import { d_hello } from "../dictionary"

const Hello = () => {
  const lang = useRouter().locale || "en"

  return (
    <div className="flex flex-row justify-between w-full container">
      <div className="flex flex-col items-center container justify-center py-56 lg:py-80">
        <div className="flex-flex-col items-center ">
          <Motion_Wrapper>
            <Subheading additional_class="text-left px-0 m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:py-1">
              {d_hello.name[lang]}
            </Subheading>
          </Motion_Wrapper>

          <Motion_Wrapper>
            <Heading additional_class="lg:m-0 sm:m-0 m-0 pr-8 font-normal sm:pr-8 md:py-1 lg:pr-12 xl:pr-24 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-main">Frontend </span>
              {d_hello.dev[lang]}
            </Heading>
          </Motion_Wrapper>

          <Motion_Wrapper>
            <Heading additional_class="lg:m-0 sm:m-0 m-0 text-right font-normal my-1 md:py-1 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-main">UI/UX </span>
              {d_hello.design[lang]}
            </Heading>
          </Motion_Wrapper>
        </div>
      </div>
    </div>
  )
}

export default Hello
