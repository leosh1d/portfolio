import React from "react"

interface ChatBtnProps {
    onClick: Function
    children: React.ReactNode
    disabled?: boolean
}

const ChatBtn = ({onClick, children, disabled}: ChatBtnProps) => {
    return (
        <div className="my-2 flex flex-row">
            <button
                onClick={() => {
                    onClick()
                }}
                disabled={disabled}
                className={`rounded-3xl ml-auto p-4 font-bold bg-main bg-opacity-5 text-main duration-200 ease-out-quad ${disabled ?  `cursor-not-allowed bg-black_light text-black_light bg-opacity-15 opacity-40` : `focus-visible:ring-4 ring-main hover:bg-opacity-10`}`}
            >
                {children}
            </button>
        </div>
    )
}

export default ChatBtn
