import React from "react"
import { motion } from "framer-motion"

interface motion_wrapper_props {
  children: React.ReactNode
}

const Motion_Wrapper = ({ children }: motion_wrapper_props) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
export default Motion_Wrapper
