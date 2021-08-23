import React from "react"

import Arrow from "../../svg/arrow"

import Image from "next/image"

interface ExpertProps {
  pic: StaticImageData
  name: string
  role: string
}

const Expert = ({ pic, name, role }: ExpertProps) => {
  return (
    <button className="flex justify-between items-center my-2 transition hover:bg-gray focus:bg-gray rounded-2xl py-3 px-3">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={pic} alt="profile-pic" layout="fixed" />
        </div>

        <div className="flex flex-col ml-3">
          <span className="font-bold text-lg text-left">{name}</span>
          <span className="text-gray_light text-left">{role}</span>
        </div>
      </div>
      <div className="mr-2">
        <Arrow />
      </div>
    </button>
  )
}

export default Expert
