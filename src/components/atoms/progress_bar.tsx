import React from "react"
import { motion } from "framer-motion"

interface progress_bar_props {
  value: number
  delay: number
}

const Progress_Bar = ({ value, delay }: progress_bar_props) => {
  return (
    <motion.div className="bg-gray rounded-full h-1 relative w-full my-2">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4, delay: delay }}
        className="bg-main h-full rounded-full origin-left	"
        style={{ width: value + "%" }}
      ></motion.div>
    </motion.div>
  )
}

export default Progress_Bar
