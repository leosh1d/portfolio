import React from "react"
import Heading from "../../atoms/heading"
import { useRouter } from "next/router"
import { d_benefits } from "../../dictionary"

import Img from "../../atoms/img"
import img_load from "../../../img/fast-load.webp"

const Fast_load = () => {
  const lang = useRouter().locale || "en"
  return (
    <div className="rounded-3xl flex flex-col md:text-xl overflow-hidden relative w-full bg-gray_medium dark:bg-black_medium duration-200 transition-colors">
      <Heading additional_class="m-4 lg:m-6">{d_benefits.load[lang]}</Heading>
      <Img src={img_load} alt="fast_load" />
    </div>
  )
}

export default Fast_load
