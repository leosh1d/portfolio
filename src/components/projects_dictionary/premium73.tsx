import React from "react"
import Text_Link from "../atoms/text-link"
import Paragraph from "../atoms/paragraph"
import Heading from "../atoms/heading"
import Img from "../atoms/StaticImg"
import Premium_m from "../../img/premium_m.webp"
import Premium_pc from "../../img/premium_pc.webp"

const D_premium73 = (props: { lang: string }) => {
  return (
    <>
      {props.lang === "ru" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Стек: </span> <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://www.gatsbyjs.com/">Gatsby,</Text_Link>{" "}
            <Text_Link href="https://www.strapi.io/">Strapi</Text_Link>
          </Heading>
          <Paragraph>Стоматологической клинике требовалась система лендингов для маркетинговых целей.</Paragraph>
          <Paragraph>Дизайна лендингов не было, и поэтому я получил полную творческую свободу.</Paragraph>
          <Paragraph>
            Главная особенность данного проекта в его архитектуре. Тут использован{" "}
            <Text_Link href="https://jamstack.org/">JAM stack</Text_Link>: в основе берется проект на{" "}
            <Text_Link href="https://reactjs.org/">React</Text_Link>, и генерируется в статичную разметку, в данном
            случае с помощью <Text_Link href="https://www.gatsbyjs.com/">Gatsby</Text_Link>. В итоге мы получаем очень
            быструю загрузку и очень малую нагрузку на сервер.{" "}
          </Paragraph>
          <Paragraph>
            Но у данного подхода есть один недостаток – нужно постоянно ребилдить проект при изменении содержимого. То
            есть для обновления контента нужно какое-то время.
          </Paragraph>
          <Paragraph>
            <Text_Link href="https://xn--80agglboffblcbpofqd2a6t.xn--p1ai/">Посмотреть</Text_Link>
          </Paragraph>
        </div>
      )}
      {props.lang === "en" && (
        <div className="container mx-auto">
          <Heading additional_class="text-left mb-4">
            <span>Stack: </span> <Text_Link href="https://reactjs.org/">React,</Text_Link>{" "}
            <Text_Link href="https://www.gatsbyjs.com/">Gatsby,</Text_Link>{" "}
            <Text_Link href="https://www.strapi.io/">Strapi</Text_Link>
          </Heading>
          <Paragraph>A dental clinic needed a system of webpages for marketing purposes.</Paragraph>
          <Paragraph>There was no design of the landing pages, so I had complete creative freedom.</Paragraph>
          <Paragraph>
            The main feature of this project is its architecture. It uses a{" "}
            <Text_Link href="https://jamstack.org/">JAM stack</Text_Link>: it takes a{" "}
            <Text_Link href="https://reactjs.org/">React</Text_Link> projectand generates static markup, in this case
            using <Text_Link href="https://www.gatsbyjs.com/">Gatsby</Text_Link>. As a result, we get very fast loading
            and very low load on the server.{" "}
          </Paragraph>
          <Paragraph>
            But this approach has one disadvantage - you need to constantly rebuild the project when the content
            changes. That is, to update the content needs some time.
          </Paragraph>
          <Paragraph>
            <Text_Link href="https://xn--80agglboffblcbpofqd2a6t.xn--p1ai/">Take a look</Text_Link>
          </Paragraph>
        </div>
      )}
      <div className="flex flex-col lg:flex-row w-full container mx-auto mt-12">
        <Img src={Premium_pc} alt="pc" />
        <Img src={Premium_m} alt="mobile" />
      </div>
    </>
  )
}

export default D_premium73
