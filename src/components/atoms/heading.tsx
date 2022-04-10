import React from "react"

import { heading_props } from "../interfaces"

const Heading = ({ children, additional_class }: heading_props) => {
  return (
    <h1
      className={
        "text-2xl lg:text-4xl font-bold text-black_light ease-out-quad duration-200 dark:text-white " +
        (additional_class || "")
      }
    >
      {children}
    </h1>
  )
}

export default Heading
