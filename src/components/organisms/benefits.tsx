import React from "react"
import Mentoring from "../molecules/benefits/mentoring/mentoring"
import Mobile_First from "../molecules/benefits/mobile_first"
import Fast_load from "../molecules/benefits/fast_load"
import Code from "../molecules/benefits/code"
import Development from "../molecules/benefits/development"
import TreeBuildComponent from "../molecules/benefits/algo/treeBuildComponent";
import {TechReview} from "../molecules/benefits/tech_review/tech_review";

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-8 flex-col w-full p-4 container mt-4">
      <div className="xl:col-span-1">
        <Mentoring />
      </div>
      <div className="xl:col-span-3">
        <TechReview />
      </div>

      <div className="xl:col-span-2">
        <Fast_load />
      </div>

      <div className="xl:col-span-2">
        <Code />
      </div>

      <div className="xl:col-span-full">
          <TreeBuildComponent/>
      </div>
    </div>
  )
}

export default Benefits
