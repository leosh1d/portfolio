import Heading from "../src/components/atoms/heading"
import {useRouter} from "next/router"
import {d_404} from "../src/components/dictionary"
import Settings from "../src/components/molecules/settings/settings"
import Contact from "../src/components/molecules/contact/contact"
import Link from "next/link"

export default function Custom404() {
    const lang = useRouter().locale || "en"

    return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
            <Heading>{d_404.title[lang]} 🤖</Heading>
            <Link href="/">
                <button
                    className="rounded-3xl ml-auto p-4 font-bold bg-main bg-opacity-5 focus-visible:ring-4 ring-main hover:bg-opacity-10 text-main duration-200 ease-out-quad "
                >
                    {d_404.back[lang]}
                </button>
            </Link>
            <Settings/>
            <Contact/>
        </div>
    )
}
