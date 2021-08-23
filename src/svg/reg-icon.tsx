import React from "react"
import Logo from "./logo"

const RegIcon = () => {
  return (
    <div className="absolute inset-y-0 right-0 h-full">
      <div className="ricon3 absolute"></div>
      <div className="ricon2 absolute"></div>

      <div className="ricon1 absolute">
        <Logo />
      </div>
    </div>
  )
}

export default RegIcon
