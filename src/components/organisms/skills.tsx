import React from "react"
import Heading from "../atoms/heading"
import Progress_Widget from "../molecules/progress-widget"
import Button_Link from "../molecules/button_link"

const Skills = () => {
  return (
    <div className="flex flex-col container my-32">
      <Heading>Навыки</Heading>
      <Progress_Widget value={90} title="frontend" delay={0} />
      <Progress_Widget value={70} title="backend" delay={0.3} />
      <Progress_Widget value={83} title="UI UX Design" delay={0.6} />
      <div className="flex justify-center my-8">
        <Button_Link value="подробнее" href="/skills" />
      </div>
    </div>
  )
}

export default Skills
