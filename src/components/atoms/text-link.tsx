import React from "react"

import Link from "next/link"

interface link_props {
  children: React.ReactNode
  href: string
}

const Text_Link = ({ children, href }: link_props) => {
  return (
    <Link href={href} passHref>
      <a className="font-bold pb-1 group text-main ease-out-quad duration-200 text-decoration-custom underline relative">
        {children}
      </a>
    </Link>
  )
}

export default Text_Link
