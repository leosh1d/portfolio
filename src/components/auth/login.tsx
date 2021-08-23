import React from "react"
import Return from "./return"
import LoginIcon from "../../svg/login-icon"

import Link from "next/link"

const Login = () => {
  return (
    <div className="max-w-screen-md w-full rounded-3xl my-9">
      <Return />
      <div className="bg-white p-10 shadow rounded-3xl mt-6 relative overflow-hidden">
        <LoginIcon />
        <h1>Вход</h1>
        <form className="mt-6 flex flex-col max-w-xs	">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition mb-3 hover:bg-gray_blue focus:bg-gray_blue"
          ></input>
          <input
            type="password"
            placeholder="Пароль"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition mb-5 hover:bg-gray_blue focus:bg-gray_blue"
          ></input>
          <input
            type="submit"
            value="Войти"
            className="bg-blue font-semibold text-white px-4 py-3 border rounded-xl transition mb-5 hover:bg-blue-light focus:bg-blue-light"
          ></input>
          <div className="w-full flex justify-center items-center text-blue gap-5">
            <Link href="/register" passHref>
              <button className="transition hover:text-blue-light focus:text-blue-light">Регистрация</button>
            </Link>

            <span className="bg-blue w-px h-3"></span>
            <button className="transition hover:text-blue-light focus:text-blue-light">Забыли пароль?</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
