import React from "react"
import H_links from "../atoms/h_links"

const Header = () => {
  return (
    <div className="max-w-full shadow">
      <div className="container lg mx-auto flex flex-row justify-center gap-8	">
        <H_links href="/" value="Главная" />
        <H_links href="/projects" value="Проекты" />
        <H_links href="/skills" value="Навыки" />
        <H_links href="/contact" value="Связаться" />
      </div>
    </div>
  )
}
export default Header
