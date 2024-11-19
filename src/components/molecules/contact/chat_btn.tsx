import React from "react"

interface ChatBtnProps {
    onClick: Function
    children: React.ReactNode
    disabled?: boolean
    className?: string
}

const ChatBtn = ({onClick, children, disabled, className}: ChatBtnProps) => {
    return (
            <button
                onClick={() => {
                    onClick()
                }}
                disabled={disabled}
                className={`rounded-3xl p-4 font-bold bg-main bg-opacity-5 text-main duration-200 ease-out-quad ${disabled ?  `cursor-not-allowed bg-black_light text-black_light bg-opacity-15 opacity-40` : `focus-visible:ring-4 ring-main hover:bg-opacity-10`} ${className}`}
            >
                {children}
            </button>
    )
}

export default ChatBtn
