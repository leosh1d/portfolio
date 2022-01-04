import React from "react"

import { motion } from "framer-motion"

interface message_props {
  children: React.ReactNode
  isUser: boolean
}

const Message = ({ children, isUser }: message_props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-2 flex flex-row mr-12 message-box"
      data-isuser={isUser}
    >
      <span className="rounded-3xl p-4 bg-white dark:bg-black_medium ">{children}</span>
    </motion.div>
  )
}

export default Message
