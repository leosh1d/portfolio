import React from "react"

interface wrapper_props {
  placeholder: string
}

const Input = ({ placeholder }: wrapper_props) => {
  return (
    <div className="relative bg-gray rounded-3xl my-6">
      <input
        type="text"
        className="relative z-10 font-semibold pb-4 pt-8 px-4 w-96 text-lg ring-0 focus:ring-4 ring-main ease-out-quad duration-200 bg-opacity-0 rounded-3xl"
        placeholder=" "
      />
      <span className="absolute left-4 top-2 opacity-50 font-semibold ease-out-quad duration-200">{placeholder}</span>
    </div>
  )
}

export default Input
