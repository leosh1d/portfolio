import React from "react"
import Heading from "../../atoms/heading"

const Pixel_Perfect = () => {
  return (
    <div className="rounded-3xl w-full flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-alt to-black_light pixel-container">
      <Heading additional_class="relative z-10 lg:py-64 py-24 text-white rounded-3xl text-center">
        pixel perfect
      </Heading>
      <div className="rounded-3xl absolute inset-0 pixel-bg opacity-25"></div>
    </div>
  )
}

export default Pixel_Perfect
