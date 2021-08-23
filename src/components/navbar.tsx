import React from "react"

import Play from "../svg/play"

interface NavbarProps {
    islogged: boolean;
}

const Navbar = ({islogged}: NavbarProps) => {
  return (
    <nav className="flex justify-center w-screen border-t border-b border-gray bg-white">
      <div className=" flex justify-between items-center max-w-screen-xl w-full">
        <div className="flex">
          <a
            href=""
            className=" text-gray_light py-4 mr-10 h-full font-semibold nav-active relative transition hover:text-blue"
          >
            Курсы
          </a>
          <a href="" className=" text-gray_light py-4 mr-10 h-full	font-semibold relative transition hover:text-blue">
            Новости
          </a>
          <a href="" className=" text-gray_light py-4 mr-10 h-full font-semibold relative transition hover:text-blue">
            Эксперты
          </a>
        </div>
        {islogged && (
          <button className="flex bg-gray rounded-xl py-1.5 px-4 items-center">
            <Play />
            <span className="text-blue font-semibold ml-2.5	">Начать сессию</span>
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
