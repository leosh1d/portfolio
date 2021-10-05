import React, { useRef, useEffect, useState } from "react"

import { useViewportScroll, motion, useTransform } from "framer-motion"

interface wrapper_props {
  children: React.ReactNode
}

const Parallax_Wrapper = ({ children }: wrapper_props) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef<HTMLDivElement>(null)

  const [top, set_top] = useState(0)

  useEffect(() => {
    if (ref.current) {
      set_top(ref.current.offsetTop)
    }
  }, [])

  //const y_transform = useTransform(scrollY, [top - 500, top, top + 500], [100, 0, -100])
  //const opacity = useTransform(scrollY, [top - 700, top, top + 700], [0, 1, 0])
  const opacity = 1

  return (
    <motion.div ref={ref} style={{ opacity: opacity }} className="flex-grow flex flex-col relative items-center w-full">
      {children}
    </motion.div>
  )
}

export default Parallax_Wrapper
