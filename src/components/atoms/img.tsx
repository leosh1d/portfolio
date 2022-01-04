import React, { useState } from "react"
import Image from "next/image"

interface Img_props {
  src: StaticImageData
  alt: string
}

const Img = ({ src, alt }: Img_props) => {
  const [is_load, set_is_load] = useState(false)

  return (
    <div className={"transition duration-500 delay-200 relative h-full w-full " + (!is_load && "opacity-0")}>
      <Image layout="responsive" src={src} alt={alt} quality={100} onLoadingComplete={() => set_is_load(true)}></Image>
    </div>
  )
}

export default Img
