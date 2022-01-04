import React from "react"
import Heading from "../../atoms/heading"
import { useRouter } from "next/router"
import { d_benefits } from "../../dictionary"

const Code = () => {
  const lang = useRouter().locale || "en"
  return (
    <div className="rounded-3xl overflow-hidden relative h-full w-full bg-gray_medium dark:bg-black_medium duration-200 transition-colors">
      <Heading additional_class="absolute m-4 lg:m-6">{d_benefits.code_title[lang]}</Heading>
      <div className="flex items-center justify-center h-full py-24">
        <div className="flex flex-col text-sm px-4 sm:text-base md:text-xl lg:text-2xl">
          <p>
            <span className="text-alt font-bold cascadia">{"<"}</span>
            <span className="text-main font-bold cascadia">ul</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
          </p>
          <p className=" pl-6">
            <span className="text-alt font-bold cascadia">{"<"}</span>
            <span className="text-main font-bold cascadia">li</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
            <span className="font-bold cascadia text-black_light ease-out-quad duration-200 dark:text-white">
              {d_benefits.code_semantic[lang]}
            </span>

            <span className="text-alt font-bold cascadia">{"</"}</span>
            <span className="text-main font-bold cascadia">li</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
          </p>

          <p className=" pl-6">
            <span className="text-alt font-bold cascadia">{"<"}</span>
            <span className="text-main font-bold cascadia">li</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
            <span className="font-bold cascadia text-black_light ease-out-quad duration-200 dark:text-white">
              {d_benefits.code_frameworks[lang]}
            </span>

            <span className="text-alt font-bold cascadia">{"</"}</span>
            <span className="text-main font-bold cascadia">li</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
          </p>
          <p className=" pl-6">
            <span className="text-alt font-bold cascadia">{"<"}</span>
            <span className="text-main font-bold cascadia">li</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
            <span className="font-bold cascadia text-black_light ease-out-quad duration-200 dark:text-white">
              {d_benefits.code_perfomance[lang]}
            </span>

            <span className="text-alt font-bold cascadia">{"</"}</span>
            <span className="text-main font-bold cascadia">li</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
          </p>
          <p>
            <span className="text-alt font-bold cascadia">{"</"}</span>
            <span className="text-main font-bold cascadia">ul</span>
            <span className="text-alt font-bold cascadia">{">"}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Code
