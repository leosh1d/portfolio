import React from "react"
import { heading_props } from "../interfaces"

const Heading = ({ children, additional_class }: heading_props) => {
  return (
    <h2
      className={
        "text-2xl text-black_light font-normal ease-out-quad duration-200 dark:text-white " + (additional_class || "")
      }
    >
      {children}
    </h2>
  )
}

export default Heading
