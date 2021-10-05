import React from "react"

import Link from "next/link"

import { motion } from "framer-motion"

import Button from "../atoms/button"

interface H_links_props {
  value: string
  href: string
}

const Button_Link = ({ value, href }: H_links_props) => {
  return (
    <Link passHref={true} href={href}>
      <motion.a
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.8 }}
        className="font-bold text-white text-center text-lg w-96 ease-out-quad duration-200 my-3 py-3 px-28 cursor-pointer bg-main rounded-full ring-0 ring-opacity-50 focus:ring-4 ring-main"
      >
        {value}
      </motion.a>
    </Link>
  )
}

export default Button_Link
