import React from "react"
import Logo from "../svg/logo"
import Home from "../svg/home"
import Info from "../svg/info"
import MAK from "../svg/mak"

interface HeaderProps {
  islogged: boolean
  pic: StaticImageData
  name: string
}

const Header = ({ islogged }: HeaderProps) => {
  return (
    <header className="flex justify-center w-screen	bg-white">
      <div className="p-3 flex justify-between items-center max-w-screen-xl w-full">
        <div className="flex items-center">
          <Logo />
          <div className="flex-col">
            <div className="font-bold text-blue text-lg">Мак-практика</div>
            <div className="text-blue text-xs text-opacity-70">Платформа для МАК и Т-игр</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-col active-header rounded-2xl p-4 pb-1 justify-between transition hover:bg-gray_blue focus:bg-gray_blue">
            <div className="flex justify-center pb-1">
              <Home />
            </div>

            <span className="text-center text-gray_light">Главная</span>
          </button>

          <button className="flex-col rounded-2xl p-4 pb-1 justify-between transition hover:bg-gray_blue focus:bg-gray_blue">
            <div className="flex justify-center pb-1">
              <Info />
            </div>

            <span className="text-center text-gray_light">О платформе</span>
          </button>

          <button className="flex-col rounded-2xl p-4 pb-1 justify-between transition hover:bg-gray_blue focus:bg-gray_blue">
            <div className="flex justify-center pb-1">
              <MAK />
            </div>
            <span className="text-center text-gray_light">МАК</span>
          </button>
        </div>
        <div>
          <button className="bg-gray rounded-xl py-1.5 px-5 font-semibold transition hover:bg-gray_blue focus:bg-gray_blue text-blue mx-1">
            Регистрация
          </button>
          <button className="bg-blue rounded-xl py-1.5 px-5 font-semibold transition hover:bg-blue-light focus:bg-blue-light text-white mx-1">
            Войти
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
