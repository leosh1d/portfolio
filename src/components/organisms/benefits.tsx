import React from "react"
import Pixel_Perfect from "../molecules/benefits/pixel_perfect"
import Mobile_First from "../molecules/benefits/mobile_first"
import Fast_load from "../molecules/benefits/fast_load"
import Code from "../molecules/benefits/code"
import Scroll_Wrapper from "../atoms/scroll_wrapper"
import Development from "../molecules/benefits/development"

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-8 flex-col w-full p-4 container mt-4">
      <div className="xl:col-span-1">
        <Scroll_Wrapper delay={0}>
          <Pixel_Perfect />
        </Scroll_Wrapper>
      </div>
      <div className="xl:col-span-3">
        <Scroll_Wrapper delay={0.2}>
          <Mobile_First />
        </Scroll_Wrapper>
      </div>

      <div className="xl:col-span-2">
        <Scroll_Wrapper delay={0}>
          <Fast_load />
        </Scroll_Wrapper>
      </div>

      <div className="xl:col-span-2">
        <Scroll_Wrapper delay={0.1}>
          <Code />
        </Scroll_Wrapper>
      </div>

      <div className="xl:col-span-full">
        <Scroll_Wrapper delay={0}>
          <Development />
        </Scroll_Wrapper>
      </div>
    </div>
  )
}

export default Benefits
