import React, { useState } from "react"
import Heading from "../../atoms/heading"
import Subheading from "../../atoms/subheading"
import Switch from "../../atoms/lang_switcher"
import Theme_Switcher from "../../atoms/theme_switcher"
import Close from "../../../svg/close"
import Setting_Btn from "./settings_btn"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "motion/react"

import { d_settings } from "../../dictionary"

const motion_menu = {
  open: { translateY: 0 },
  closed: { translateY: "110%" },
}

const Settings = () => {
  const [is_open, set_is_open] = useState(false)

  const lang = useRouter().locale || "en"

  return (
    <AnimatePresence>
      {is_open && (
        <motion.div
          key="settings"
          variants={motion_menu}
          initial="closed"
          exit="closed"
          animate={is_open ? "open" : "closed"}
          className="py-4 px-8 rounded-t-4xl lg:rounded-4xl items-center z-50 fixed bottom-0 left-0 right-0 lg:left-4 lg:right-4 lg:bottom-4 xl:left-6 xl:bottom-6 xl:right-6 lg:max-w-md ease-out-quad duration-200 bg-gray_dark bg-opacity-50 dark:bg-opacity-50 dark:bg-black_light backdrop-filter backdrop-blur-xl "
        >
          <motion.button
            whileTap={{ scale: 0.8 }}
            name="close"
            aria-label="close"
            className="absolute z-10 left-4 top-4 bg-white p-1 rounded-xl ease-out-quad duration-200 cursor-pointer dark:bg-black_dark focus-visible:ring-4 ring-main"
            onClick={() => set_is_open(false)}
          >
            <Close />
          </motion.button>
          <div className="flex flex-col max-w-md mx-auto">
            <Heading additional_class="mt-0 text-center py-2 text-2xl">{d_settings.heading[lang]}</Heading>
            <Subheading additional_class="text-center mt-4 mb-3 text-lg font-bold">
              {d_settings.language[lang]}
            </Subheading>
            <Switch content={["ru", "en"]} initial_value={lang === "ru" ? 0 : 1} />
            <Subheading additional_class="text-center mt-4 mb-3 text-lg font-bold">{d_settings.theme[lang]}</Subheading>
            <Theme_Switcher />
          </div>
        </motion.div>
      )}
      <Setting_Btn key="button" onClick={() => set_is_open(true)} is_open={is_open} />
    </AnimatePresence>
  )
}

export default Settings
