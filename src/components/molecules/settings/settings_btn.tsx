import React, { MouseEventHandler } from "react"

import { motion } from "framer-motion"

import Settings from "../../../svg/settings"

const svg_motion = {
  rest: { opacity: 1, rotate: 0, duration: 0.3, type: "spring" },
  hidden: { opacity: 0, duration: 0.3, type: "spring" },
  hover: {
    opacity: 1,
    rotate: 90,
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

interface settings_btn_props {
  onClick: MouseEventHandler<HTMLButtonElement>
  is_open: boolean
}

const Setting_Btn = ({ onClick, is_open }: settings_btn_props) => {
  return (
    <motion.button
      className="px-6 py-4 z-40 rounded-full ease-out-quad duration-200 fixed bottom-2 left-2 md:left-4 md:bottom-4 lg:left-6 lg:bottom-6 bg-gray_dark bg-opacity-75 dark:bg-opacity-75 dark:bg-black_light backdrop-filter backdrop-blur focus:ring-4 ring-main"
      whileHover="hover"
      exit="hidden"
      animate={is_open ? "hidden" : "rest"}
      whileTap="tap"
      variants={btn_motion}
      onClick={onClick}
      name="settings"
      aria-label="settings"
    >
      <motion.div variants={svg_motion}>
        <Settings />
      </motion.div>
    </motion.button>
  )
}

export default Setting_Btn
