import React from "react"
import Heading from "../../../atoms/heading"
import MentoringAnimation from "./mentoringAnimation";

const Mentoring = () => {
    return (
        <div
            className="rounded-3xl flex flex-col md:text-xl overflow-hidden relative w-full h-full justify-between bg-gray_medium dark:bg-black_medium duration-200 transition-colors">
            <Heading additional_class="m-4 lg:m-6">
                Опыт менторства
            </Heading>
            <MentoringAnimation/>
        </div>
    )
}

export default Mentoring
