import React from "react"

interface message_props {
  click: Function
  content: string
}

const Chat_btn = ({ click, content }: message_props) => {
  return (
    <div className="my-2 flex flex-row">
      <button
        onClick={() => {
          click()
        }}
        className="rounded-3xl ml-auto p-4 font-bold bg-main bg-opacity-5 focus:ring-4 ring-main hover:bg-opacity-10 text-main duration-200 ease-out-quad "
      >
        {content}
      </button>
    </div>
  )
}

export default Chat_btn
