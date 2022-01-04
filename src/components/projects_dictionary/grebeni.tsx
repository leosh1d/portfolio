import React from "react"
import Text_Link from "../atoms/text-link"
import Paragraph from "../atoms/paragraph"
import Heading from "../atoms/heading"
import Img from "../atoms/img"
import Grebeni_m from "../../img/grebeni_m.png"
import Grebeni_pc from "../../img/grebeni_pc.png"

const D_grebeni = (props: { lang: string }) => {
  return (
    <>
      {props.lang === "ru" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Стек: </span>
            <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://sass-lang.com/">Sass</Text_Link>{" "}
          </Heading>
          <Paragraph>Форма пополнения скипасса для горнолыжного курорта.</Paragraph>
        </div>
      )}
      {props.lang === "en" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Stack: </span>
            <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://sass-lang.com/">Sass</Text_Link>{" "}
          </Heading>
          <Paragraph>Form of skipass refill for the ski resort.</Paragraph>
        </div>
      )}
      <div className="flex flex-col lg:flex-row w-full container mx-auto mt-12">
        <Img src={Grebeni_m} alt="mobile" />
        <Img src={Grebeni_pc} alt="pc" />
      </div>
    </>
  )
}

export default D_grebeni
