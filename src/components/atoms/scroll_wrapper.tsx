import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface scroll_wrapper_props {
  children: React.ReactNode
  delay: number
}

const Scroll_Wrapper = ({ children, delay }: scroll_wrapper_props) => {
  const [ref, inView] = useInView({ threshold: 0.85, triggerOnce: true })
  const variants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    } else {
      animation.start("hidden")
    }
  }, [animation, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      exit="hidden"
      animate={animation}
      className="h-full w-full"
      transition={{ duration: 0.4, delay: delay }}
    >
      {children}
    </motion.div>
  )
}
export default Scroll_Wrapper
