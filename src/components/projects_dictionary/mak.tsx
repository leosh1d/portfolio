import React from "react"
import Text_Link from "../atoms/text-link"
import Paragraph from "../atoms/paragraph"
import Heading from "../atoms/heading"
import Img from "../atoms/StaticImg"
import mak1 from "../../img/mak1.webp"

const D_mak = (props: { lang: string }) => {
  return (
    <>
      {props.lang === "ru" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Стек: </span>
            <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://nextjs.org/">Next,</Text_Link>{" "}
            <Text_Link href="https://tailwindcss.com/">Tailwindcss</Text_Link>{" "}
          </Heading>
          <Paragraph>Платформа для консультаци Мак и проведения Т-игр</Paragraph>
        </div>
      )}
      {props.lang === "en" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Stack: </span>
            <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://nextjs.org/">Next,</Text_Link>{" "}
            <Text_Link href="https://tailwindcss.com/">Tailwindcss</Text_Link>{" "}
          </Heading>
          <Paragraph>A platform for Mac`s consultation and T-games</Paragraph>
        </div>
      )}
      <div className="flex flex-col lg:flex-row w-full container mx-auto mt-12">
        <Img src={mak1} alt="mak" />
      </div>
    </>
  )
}

export default D_mak
