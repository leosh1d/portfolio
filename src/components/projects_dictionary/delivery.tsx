import React from "react"
import Text_Link from "../atoms/text-link"
import Paragraph from "../atoms/paragraph"
import Heading from "../atoms/heading"
import Img from "../atoms/img"
import Delivery1 from "../../img/delivery1.png"
import Delivery2 from "../../img/delivery2.png"
import Delivery3 from "../../img/delivery3.png"

const D_devilvery = (props: { lang: string }) => {
  return (
    <>
      {props.lang === "ru" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Стек: </span>
            <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://sass-lang.com/">Sass</Text_Link>{" "}
          </Heading>
          <Paragraph>Сервис по доставке еды.</Paragraph>
        </div>
      )}
      {props.lang === "en" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Stack: </span>
            <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://sass-lang.com/">Sass</Text_Link>{" "}
          </Heading>
          <Paragraph>Food delivery service.</Paragraph>
        </div>
      )}
      <div className="flex flex-col w-full container mx-auto mt-12 gap-y-8	">
        <div className="rounded inset-0 overflow-hidden">
          <Img src={Delivery1} alt="food" />
        </div>
        <div className="rounded inset-0 overflow-hidden">
          <Img src={Delivery2} alt="statistics" />
        </div>
        <div className="rounded inset-0 overflow-hidden">
          <Img src={Delivery3} alt="settings" />
        </div>
      </div>
    </>
  )
}

export default D_devilvery
