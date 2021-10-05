import React from "react"

import { motion } from "framer-motion"

interface H_links_props {
  value: string
  type: "button" | "submit" | "reset" | undefined
}

const Button = ({ value, type }: H_links_props) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.8 }}
      type={type}
      className="font-bold w-full text-white text-lg ease-out-quad duration-200 my-3 py-3 px-28 cursor-pointer bg-main rounded-full ring-0 ring-opacity-50 focus:ring-4 ring-main"
    >
      {value}
    </motion.button>
  )
}

export default Button
