import React, { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import Link from "next/link"

interface switch_props {
  initial_value: number
  content: Array<string>
}

const Switch = ({ initial_value, content }: switch_props) => {
  const [value, set_value] = useState(initial_value)
  const router = useRouter()

  return (
    <div className="w-full relative rounded-full flex flex-row my-2 p-2 bg-gray_dark dark:bg-black_dark ease-out-quad duration-200">
      {content.map((content, index) => (
        <Link href={router.asPath} locale={content} key={index} scroll={false}>
          <a
            key={index}
            className="text-center py-2 w-1/2 cursor-pointer ring-white dark:ring-black_light focus-visible:ring-8 relative rounded-full z-10 text-black_light dark:text-white ease-out-quad duration-200"
            onClick={() => {
              set_value(index)
            }}
          >
            {content}
          </a>
        </Link>
      ))}
      <div data-value={value} className="switch flex flex-row absolute inset-0 rounded-full p-2">
        <motion.div
          layout
          className="bg-white w-1/2 h-full rounded-full dark:bg-black_light ease-out-quad duration-200 transition-colors	"
        ></motion.div>
      </div>
    </div>
  )
}

export default Switch
