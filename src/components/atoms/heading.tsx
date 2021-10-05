import React from "react"
import { motion } from "framer-motion"

interface heading_props {
  children: React.ReactNode
  additional_class?: string
}

const Heading = ({ children, additional_class }: heading_props) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={"font-bold text-5xl text-black_coffee_light my-8 " + (additional_class || "")}
    >
      {children}
    </motion.h1>
  )
}

export default Heading
