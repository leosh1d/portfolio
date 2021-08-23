import React from "react"

import Exit from "../../svg/exit"

import Link from "next/link"

const Return = () => {
  return (
    <Link href="/" passHref>
      <button className="flex items-center transition font-semibold text-gray_light hover:text-blue focus:text-blue">
        <Exit />
        <span className="ml-3  ">Вернутся на главную</span>
      </button>
    </Link>
  )
}

export default Return
