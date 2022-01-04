import Heading from "../src/components/atoms/heading"
import { useRouter } from "next/router"
import { d_404 } from "../src/components/dictionary"
import Settings from "../src/components/molecules/settings/settings"
import Contact from "../src/components/molecules/contact/contact"

export default function Custom404() {
  const lang = useRouter().locale || "en"

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Heading>{d_404.title[lang]}</Heading>
      <Settings />
      <Contact />
    </div>
  )
}
