import React from "react"
import Heading from "../../atoms/heading"
import Img from "../../atoms/StaticImg"
import img_mac from "../../../img/mb-mac.webp"
import img_i from "../../../img/mb-i.webp"

const Mobile_First = () => {
  return (
    <div className="rounded-3xl overflow-hidden relative flex flex-col h-full w-full bg-gray_medium dark:bg-black_medium duration-200 transition-colors">
      <Heading additional_class="m-4 lg:m-6">Mobile-first</Heading>
      <div className="flex flex-col lg:flex-row">
        <div className="transform scale-110 h-full w-full">
          <Img src={img_i} alt="iphone" />
        </div>

        <div className="transform h-full scale-90  w-full">
          <Img src={img_mac} alt="macbook" />
        </div>
      </div>
    </div>
  )
}

export default Mobile_First
