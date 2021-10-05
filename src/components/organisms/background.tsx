import React from "react"

//import Bloob1 from "../../svg/bloob1.svg"
import Bloob2 from "../../svg/bloob2.svg"

import { useViewportScroll, motion, useTransform } from "framer-motion"

const Background = () => {
  const { scrollY } = useViewportScroll()
  const y_transform = useTransform(scrollY, [0, 1000], [0, -350])
  const opacity = useTransform(scrollY, [0, 700], [1, 0])

  return (
    <div className="w-fullabsolute overflow-hidden h-full z--1">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ y: y_transform, opacity: opacity }}
        exit={{ opacity: 0, y: -100 }}
        className="absolute left-0 h-full svg-box z--1"
      >
        <Bloob2 />
      </motion.div>
    </div>
  )
}

export default Background
