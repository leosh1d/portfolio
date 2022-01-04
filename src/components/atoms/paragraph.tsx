import React from "react"

import { heading_props } from "../interfaces"

const Paragraph = ({ children, additional_class }: heading_props) => {
  return (
    <p
      className={
        "text-black_light my-2 ease-out-quad duration-200 dark:text-white lg:text-xl " + (additional_class || "")
      }
    >
      {children}
    </p>
  )
}

export default Paragraph
