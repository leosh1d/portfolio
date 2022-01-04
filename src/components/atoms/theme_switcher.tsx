import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const Theme_Switcher = () => {
  const { theme, setTheme } = useTheme()

  const [theme_state, set_theme_state] = useState("system")

  useEffect(() => {
    !!theme && set_theme_state(theme)
  }, [theme])

  const lang = useRouter().locale

  return (
    <div className=" rounded-full flex flex-row my-2 p-2 bg-gray_dark dark:bg-black_dark ease-out-quad duration-200 relative">
      <button
        className="text-center py-2 px-2 w-1/2 cursor-pointer rounded-full ring-white dark:ring-black_light focus:ring-8 relative z-10 text-black_light dark:text-white ease-out-quad duration-200"
        onClick={() => {
          setTheme("dark")
        }}
      >
        {lang === "ru" ? "темное" : "dark"}
      </button>
      <button
        className="text-center py-2 px-2 w-1/2 cursor-pointer rounded-full ring-white dark:ring-black_light focus:ring-8 relative z-10 text-black_light dark:text-white ease-out-quad duration-200"
        onClick={() => {
          setTheme("system")
        }}
      >
        {lang === "ru" ? "система" : "system"}
      </button>
      <button
        className="text-center py-2 px-2 w-1/2 cursor-pointer rounded-full ring-white dark:ring-black_light focus:ring-8 relative z-10 text-black_light dark:text-white ease-out-quad duration-200"
        onClick={() => {
          setTheme("light")
        }}
      >
        {lang === "ru" ? "светлое" : "light"}
      </button>
      <div className="flex flex-row absolute inset-0 rounded-full p-2 switch-theme" data-value={theme_state}>
        <motion.div
          layout
          className="bg-white w-1/3 h-full rounded-full dark:bg-black_light ease-out-quad duration-200 transition-colors	"
        ></motion.div>
      </div>
    </div>
  )
}

export default Theme_Switcher
