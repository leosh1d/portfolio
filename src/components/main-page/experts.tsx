import React from "react"

import pic1 from "../../images/profile-pics/1.png"
import pic2 from "../../images/profile-pics/2.png"
import pic3 from "../../images/profile-pics/3.png"
import pic4 from "../../images/profile-pics/4.png"

import Expert from "./expert"

const list = [
  {
    pic: pic1,
    name: "Качесова Нина",
    role: "Астропсихолог",
  },
  {
    pic: pic2,
    name: "Данч Виктор",
    role: "Астропсихолог",
  },
  {
    pic: pic3,
    name: "Качесова Нина",
    role: "Психотерапевт",
  },
  {
    pic: pic4,
    name: "Качесова Нина",
    role: "Психолог",
  },
]

const Experts = () => {
  return (
    <div className="bg-white shadow rounded-3xl p-6 ml-12">
      <h1 className="font-semibold text-xl my-2">Эксперты</h1>
      <div className="flex flex-col">
        {list.map((content, index) => (
          <Expert key={index} pic={content.pic} name={content.name} role={content.role} />
        ))}
      </div>
    </div>
  )
}

export default Experts
