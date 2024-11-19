import React from "react"
import Heading from "../../../atoms/heading"
import MentoringAnimation from "./mentoringAnimation";
import {d_benefits} from "../../../dictionary";
import {useRouter} from "next/router";

const Mentoring = () => {
    const lang = useRouter().locale || "en"

    return (
        <div
            className="rounded-3xl flex flex-col md:text-xl overflow-hidden relative w-full h-full justify-between bg-gray_medium dark:bg-black_medium duration-200 transition-colors">
            <Heading additional_class="m-4 lg:m-6">
                {d_benefits.mentor[lang]}
            </Heading>
            <MentoringAnimation/>
        </div>
    )
}

export default Mentoring
