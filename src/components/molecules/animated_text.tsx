import React, { useState, useEffect } from "react"
import Heading from "../atoms/heading"

import Typewriter from "typewriter-effect"

const Animated_Text = () => {
  const array = [
    "React",
    "Next",
    "Gatsby",
    "Node.js",
    "Express",
    "Graphql",
    "Apollo",
    "MongoDB",
    "Typescript",
    "Redux",
    "Sass",
    "Tailwind css",
    "Webpack",
    "Figma",
  ]

  return (
    <Heading additional_class="text-6xl text-left">
      <Typewriter
        options={{
          strings: array,
          autoStart: true,
          loop: true,
          cursor: "|",
          cursorClassName: "typewriter-cursor",
        }}
      />
    </Heading>
  )
}

export default Animated_Text
