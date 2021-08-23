import React from "react"

import Image from "next/image"

import img1 from "../../images/card-banner1.png"
import img2 from "../../images/card-banner2.png"
import img3 from "../../images/card-banner3.png"

import Logo from "../../svg/logo"

import Link from "next/link"

const Top_banner = () => {
  return (
    <div className="bg-white w-full relative rounded-3xl my-9 shadow overflow-hidden">
      <div className="absolute bottom-0 left-0 flex flex-col items-end">
        <Image alt="card" placeholder="blur" src={img3} />
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col items-end">
        <Image alt="card" placeholder="blur" src={img2} />
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col items-end">
        <Image alt="card" placeholder="blur" src={img1} />
      </div>

      <div className="flex flex-col m-16">
        <h1 className="text-center my-3 ">Это платформа для консультации МАК и проведения Т-игр</h1>
        <div className="flex justify-center">
          <Link href="/login" passHref>
            <button className="bg-blue font-bold transition hover:bg-blue-light focus:bg-blue-light text-white text-lg py-3 px-8 rounded-xl my-3">
              Начни практиковать прямо сейчас
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute right-0 top-0 rounded-bl-3xl shadow-sm pl-3 pb-3 pr-12 pt-28">
        <Logo />
      </div>
    </div>
  )
}

export default Top_banner
