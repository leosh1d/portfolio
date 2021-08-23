import React from "react"
import Top_banner from "./top-banner"
import Cource from "./cource"
import Experts from "./experts"

import Image from "next/image"

import training from "../../images/training.png"

import cource_img from "../../images/cource.jpg"

const Main = () => {
  return (
    <main className="flex justify-between items-center max-w-screen-xl w-full flex-col">
      <Top_banner />
      <div className="flex flex-row w-full	">
        <div className="flex flex-col flex-shrink-0	">
          <Cource pic={cource_img} />
          <Cource pic={cource_img} />
        </div>
        <div className="flex flex-col flex-shrink-1 w-full">
          <Experts />
          <div className="flex justify-center rounded-3xl">
            <Image src={training} alt="training" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
