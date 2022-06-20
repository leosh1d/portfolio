import React, { MouseEventHandler } from "react"

import { motion } from "framer-motion"

import Contact from "../../../svg/contact"

const svg_motion = {
  rest: { opacity: 1, rotate: 0, duration: 0.3, type: "spring" },
  hidden: { opacity: 0, duration: 0.3, type: "spring" },
  hover: {
    opacity: 1,
    rotate: -10,
    scale: 1.05,
    duration: 0.3,
    type: "spring",
  },
  tap: {
    scale: 0.8,
    duration: 0.3,
    type: "spring",
  },
}

const btn_motion = {
  rest: { y: 0, opacity: 1, duration: 0.3, type: "spring" },
  hidden: { y: "100%", opacity: 0, duration: 0.3, type: "spring" },
}

interface contact_btn_props {
  onClick: MouseEventHandler<HTMLButtonElement>
  is_open: boolean
}

const Contact_Btn = ({ onClick, is_open }: contact_btn_props) => {
  return (
    <motion.button
      className="px-6 py-4 z-40 rounded-full ease-out-quad transition-colors duration-200 fixed bottom-2 right-2 md:right-4 md:bottom-4 lg:right-6 lg:bottom-6 bg-gray_dark bg-opacity-75 dark:bg-opacity-75 dark:bg-black_light backdrop-filter backdrop-blur focus-visible:ring-4 ring-main"
      whileHover="hover"
      initial="hidden"
      animate={is_open ? "hidden" : "rest"}
      exit="hidden"
      whileTap="tap"
      variants={btn_motion}
      onClick={onClick}
      name="contact"
      aria-label="contact"
    >
      <motion.div variants={svg_motion}>
        <Contact />
      </motion.div>
    </motion.button>
  )
}

export default Contact_Btn
