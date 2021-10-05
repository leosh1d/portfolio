import React from "react"
import Input from "../atoms/input"
import Button from "../atoms/button"

const Form = () => {
  return (
    <form>
      <Input placeholder="Ваше имя" />
      <Input placeholder="Ваш Email" />
      <Input placeholder="Сообщение" />
      <Button value="Отправить" type="submit" />
    </form>
  )
}

export default Form
