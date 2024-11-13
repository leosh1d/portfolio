import React, { useState } from "react"
import Image from "next/image"

export type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
  placeholder?: string
}

export interface Img_props {
  src: StaticImageData
  alt: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  className?: string
  height?: number
  width?: number
}

const StaticImg = ({ src, alt, objectFit, className = "", height, width }: Img_props) => {
  const [is_load, set_is_load] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        quality={100}
        height={height}
        width={width}
        placeholder="blur"
        style={{
          objectFit: objectFit,
        }}
        className={`${className} ${is_load ? "unblur " : ""}`}
        onLoad={() => set_is_load(true)}
      />
      <style jsx global>{`
        .unblur {
          animation: unblur 0.1s linear;
        }

        @keyframes unblur {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </>
  )
}

export default StaticImg
