import React, { useState } from "react"
import Close from "../../../svg/close"
import Contact_Btn from "./contact_btn"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

import Heading from "../../atoms/heading"
import Subheading from "../../atoms/subheading"
import { d_bot } from "../../dictionary"
import Contact_Chat from "./contact_chat"

const motion_menu = {
  open: { y: 0 },
  closed: { y: "110%" },
}

const Contact = () => {
  const [is_open, set_is_open] = useState(false)

  const lang = useRouter().locale || "en"

  return (
    <AnimatePresence>
      {is_open && (
        <motion.div
          key="chat"
          variants={motion_menu}
          initial="closed"
          exit="closed"
          animate={is_open ? "open" : "closed"}
          className=" w-full flex flex-col rounded-t-4xl lg:rounded-4xl z-50 h-3/4 fixed bottom-0 right-0 lg:right-4 lg:bottom-4 xl:bottom-6 xl:right-6 lg:max-w-md ease-out-quad duration-200 bg-gray_dark bg-opacity-50 dark:bg-opacity-50 dark:bg-black_light backdrop-filter backdrop-blur-xl "
        >
          <motion.button
            whileTap={{ scale: 0.8 }}
            name="close"
            aria-label="close"
            className="absolute z-10 right-4 top-4 bg-white p-1 rounded-xl ease-out-quad duration-200 cursor-pointer dark:bg-black_dark focus:ring-4 ring-main"
            onClick={() => set_is_open(false)}
          >
            <Close />
          </motion.button>
          <div className="flex flex-col px-8 py-4">
            <Heading additional_class="text-2xl lg:text-2xl">{d_bot.heading[lang]}</Heading>
            <Subheading additional_class="text-lg lg:text-lg">{d_bot.subheading[lang]}</Subheading>
          </div>
          <Contact_Chat lang={lang} />
        </motion.div>
      )}
      <Contact_Btn key="btn" onClick={() => set_is_open(true)} is_open={is_open} />
    </AnimatePresence>
  )
}

export default Contact
