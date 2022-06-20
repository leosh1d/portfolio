import React from "react"
import Pixel_Perfect from "../molecules/benefits/pixel_perfect"
import Mobile_First from "../molecules/benefits/mobile_first"
import Fast_load from "../molecules/benefits/fast_load"
import Code from "../molecules/benefits/code"
import Development from "../molecules/benefits/development"

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-8 flex-col w-full p-4 container mt-4">
      <div className="xl:col-span-1">
        <Pixel_Perfect />
      </div>
      <div className="xl:col-span-3">
        <Mobile_First />
      </div>

      <div className="xl:col-span-2">
        <Fast_load />
      </div>

      <div className="xl:col-span-2">
        <Code />
      </div>

      <div className="xl:col-span-full">
        <Development />
      </div>
    </div>
  )
}

export default Benefits
