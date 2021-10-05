import React from "react"

import Heading from "../atoms/heading"
import Subheading from "../atoms/subheading"
import Animated_Text from "../molecules/animated_text"
import Button_Link from "../molecules/button_link"

import { motion } from "framer-motion"

const Hello = () => {
  return (
    <motion.div className="flex flex-row justify-between w-full container">
      <div className="flex flex-col items-left container my-64">
        <div className="flex-flex-col my-12 items-center">
          <Heading>
            Привет, меня зовут <span className="text-main">Алексей</span>
          </Heading>
          <Subheading additional_class="">
            я <span className="text-main">frontend</span> разработчик
          </Subheading>
        </div>
        <Button_Link value="проекты" href="/projects" />
      </div>
      <div className="w-1/3 flex flex-col justify-center">
        <Animated_Text />
      </div>
    </motion.div>
  )
}

export default Hello
