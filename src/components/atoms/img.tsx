import React, { useState } from "react"
import Image from "next/image"

export interface Img_props {
  src: string
  alt: string
  layout?: "responsive" | "fixed" | "fill" | "intrinsic" | "raw"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  className?: string
  parentClass?: string
  height?: number
  width?: number
}

export const DynamicImg = ({
  src,
  alt,
  objectFit,
  layout = "responsive",
  className = "",
  height,
  width,
  parentClass = "",
}: Img_props) => {
  const [is_load, set_is_load] = useState(false)

  const getPlaceholder = (src: string) => {
    let array = String(src).split("/")
    const id = array[array.length - 1]
    array[array.length - 1] = "resize=height:10,width:10"
    array.push(id)
    return array.join("/")
  }

  return (
    <span className={parentClass}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        height={height}
        width={width}
        placeholder="blur"
        blurDataURL={getPlaceholder(src)}
        objectFit={objectFit}
        layout={layout}
        className={`${className} ${is_load ? "unblur " : ""}`}
        onLoadingComplete={() => set_is_load(true)}
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
    </span>
  )
}
