import React, { useEffect } from "react"
import Heading from "../../atoms/heading"
import { useRouter } from "next/router"
import { d_benefits } from "../../dictionary"
import { motion, useAnimation } from "motion/react"

import { useInView } from "react-intersection-observer"

const Development = () => {
  const [ref, inView] = useInView({ threshold: 0.9, triggerOnce: true })
  const lang = useRouter().locale || "en"
  const animation = useAnimation()

  const line_variants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
    },
  }

  const box1_variants = {
    hidden: {
      y: 75,
    },
    visible: {
      y: 0,
    },
  }

  const box2_variants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    } else {
      animation.start("hidden")
    }
  }, [animation, inView])

  return (
    <div
      ref={ref}
      className="rounded-3xl flex flex-col md:text-xl overflow-hidden relative w-full bg-gray_medium dark:bg-black_medium duration-200 transition-colors"
    >
      <Heading additional_class="m-4 lg:m-6"> {d_benefits.development[lang]}</Heading>
      <div className="py-24 flex flex-col items-center">
        <motion.div
          variants={box1_variants}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <p className="text-5xl text-center text-black_light font-black ease-out-quad duration-200 dark:text-white my-2 mx-4 ">
            {d_benefits.development_months[lang]}
          </p>
          <motion.div
            variants={line_variants}
            animate={animation}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="origin-left absolute bg-black_light dark:bg-white h-2 w-full rounded-full"
          />
        </motion.div>
        <motion.div variants={box2_variants} animate={animation} transition={{ duration: 0.3, delay: 1.1 }}>
          <p className="text-5xl text-center my-1 text-main font-black ease-out-quad duration-200 ">
            {d_benefits.development_weeks[lang]}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Development
