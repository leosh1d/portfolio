import React from "react"
import Return from "./return"
import LoginIcon from "../../svg/login-icon"

import RegIcon from "../../svg/reg-icon"

const Register = () => {
  return (
    <div className="max-w-screen-md w-full rounded-3xl my-9">
      <Return />
      <div className="bg-white p-10 shadow rounded-3xl mt-6 relative overflow-hidden">
        <RegIcon />
        <h1>Регистрация</h1>
        <form className="mt-6 flex flex-col">
          <input
            type="email"
            placeholder="Email*"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition mb-3 hover:bg-gray_blue focus:bg-gray_blue max-w-xs"
          ></input>
          <input
            type="text"
            placeholder="ФИО*"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition mb-5 hover:bg-gray_blue focus:bg-gray_blue max-w-xs"
          ></input>
          <input
            type="text"
            placeholder="Страна"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition mb-5 hover:bg-gray_blue focus:bg-gray_blue max-w-xs"
          ></input>
          <input
            type="text"
            placeholder="Город*"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition mb-5 hover:bg-gray_blue focus:bg-gray_blue max-w-xs"
          ></input>
          <input
            type="text"
            placeholder="Промокод"
            className="bg-gray px-4 py-3 border border-gray_blue rounded-xl transition hover:bg-gray_blue focus:bg-gray_blue max-w-xs"
          ></input>
          <label className="my-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue transition rounded-md p-2 border-2 border-blue max-w-xs mr-2"
            />
            <span className="text-gray_light mr-1 text-sm	">Принимаю условия </span>
            <button className="text-blue transition hover:text-blue-light focus:text-blue-light max-w-xs text-sm	">
              Пользовательского соглашения
            </button>
          </label>

          <input
            type="submit"
            value="Зарегестрироваться"
            className="max-w-xs bg-blue font-semibold text-white px-4 py-3 border rounded-xl transition mb-5 hover:bg-blue-light focus:bg-blue-light"
          ></input>
          <div className="w-full flex justify-center items-center text-blue gap-5 max-w-xs">
            <button className="transition hover:text-blue-light focus:text-blue-light">Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
