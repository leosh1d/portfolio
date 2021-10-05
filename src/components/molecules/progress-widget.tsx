import React from "react"
import Progress_Bar from "../atoms/progress_bar"
import Subheading from "../atoms/subheading"

interface progress_bar_props {
  title: string
  value: number
  delay: number
}

const Progress_Widget = ({ title, value, delay }: progress_bar_props) => {
  return (
    <div className="flex flex-col my-6">
      <Subheading>{title}</Subheading>
      <Progress_Bar value={value} delay={delay} />
    </div>
  )
}

export default Progress_Widget
