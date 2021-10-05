import React from "react"

import { motion } from "framer-motion"

interface wrapper_props {
  children: React.ReactNode
}

const Page_Wrapper = ({ children }: wrapper_props) => {
  return (
    <motion.div exit={{ opacity: 0 }} className="flex-grow flex flex-col relative items-center">
      {children}
    </motion.div>
  )
}

export default Page_Wrapper
