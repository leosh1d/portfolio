import React from "react"

interface wrapper_props {
  children: React.ReactNode
}

const Page_Wrapper = ({ children }: wrapper_props) => {
  return <div className="flex-grow flex flex-col relative items-center min-h-screen">{children}</div>
}

export default Page_Wrapper
