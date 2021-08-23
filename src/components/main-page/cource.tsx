import React from "react"

import Image from "next/image"

interface CourceProps {
  pic: StaticImageData
}

const Cource = ({ pic }: CourceProps) => {
  return (
    <div className="bg-white shadow rounded-3xl p-7 flex-center mb-8">
      <Image src={pic} alt="Изображение курса" />
      <h2 className="font-bold text-xl mt-5 ">Курс по проведению консультаций с использованием МАК</h2>
      <div className="my-4">Немного описания</div>
      <button className="bg-blue transition hover:bg-blue-light  focus:bg-blue-light text-white text-xl font-semibold py-3 px-8 rounded-xl w-full">
        Записаться
      </button>
    </div>
  )
}

export default Cource
