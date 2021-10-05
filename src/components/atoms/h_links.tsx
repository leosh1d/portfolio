import React from "react"

import { useRouter } from "next/router"

import Link from "next/link"

import { motion } from "framer-motion"

interface H_links_props {
  value: string
  href: string
}

const H_links = ({ value, href }: H_links_props) => {
  const router = useRouter()

  const active = router.asPath === href ? { scaleX: 1 } : { scaleX: 0 }

  return (
    <Link passHref={true} href={href}>
      <div className={"flex flex-col relative header-box " + active}>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-bold text-black_coffee_light text-lg py-4 cursor-pointer hover:text-main ease-out-quad duration-200"
        >
          {value}
        </motion.a>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={active}
          // transition={{ delay: 0.3 }}
          className="absolute bottom-0 bg-main w-full rounded-full transform"
        ></motion.div>
      </div>
    </Link>
  )
}

export default H_links
