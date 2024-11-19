import React, {useEffect, useState} from "react"
import Message from "./message"
import {d_bot} from "../../dictionary"
import ChatBtn from "./chat_btn"

const Contact_Chat = ({lang}: { lang: string }) => {
    const [array, set_array] = useState([
        {
            text: d_bot.hello[lang],
            isUser: false,
        },
        {
            text: d_bot.help[lang],
            isUser: false,
        },
    ])

    const [btns_visibility, set_btns_visibility] = useState(true)
    const [is_message, set_is_message] = useState(false)

    useEffect(() => {
        set_array([
            {
                text: d_bot.hello[lang],
                isUser: false,
            },
            {
                text: d_bot.help[lang],
                isUser: false,
            },
        ])
        set_is_message(false)
    }, [lang])

    const push__hello = () => {
        set_btns_visibility(false)
        const message1 = {text: d_bot.btn_hello[lang], isUser: true}
        const message2 = {text: d_bot.hello_response_1[lang], isUser: false}
        const message3 = {text: d_bot.hello_response_2[lang], isUser: false}
        const message4 = {text: d_bot.hello_response_3[lang], isUser: false}
        setTimeout(() => {
            set_array([...array, message1])
        }, 300)
        setTimeout(() => {
            set_array([...array, message1, message2])
        }, 700)
        setTimeout(() => {
            set_array([...array, message1, message2, message3])
        }, 1200)
        setTimeout(() => {
            set_array([...array, message1, message2, message3, message4])
        }, 1900)
        setTimeout(() => {
            set_btns_visibility(true)
        }, 2400)
    }

    const push__work = () => {
        set_btns_visibility(false)
        const message1 = {text: d_bot.btn_work[lang], isUser: true}
        const message2 = {text: d_bot.work_response_1[lang], isUser: false}
        const message3 = {text: d_bot.work_response_2[lang], isUser: false}

        setTimeout(() => {
            set_array([...array, message1])
        }, 400)
        setTimeout(() => {
            set_array([...array, message1, message2])
        }, 800)
        setTimeout(() => {
            set_array([...array, message1, message2, message3])
            set_is_message(true)
        }, 1200)
        setTimeout(() => {
            set_btns_visibility(true)
        }, 1600)
    }

    const return_ = () => {
        set_btns_visibility(false)
        setTimeout(() => {
            set_array([...array, {text: d_bot.other[lang], isUser: true}])
            set_is_message(false)
        }, 400)

        setTimeout(() => {
            set_btns_visibility(true)
        }, 800)
    }

    const push__stack = () => {
        set_btns_visibility(false)
        setTimeout(() => {
            set_array([...array, {text: d_bot.btn_stack[lang], isUser: true}])
        }, 400)
        setTimeout(() => {
            set_array([
                ...array,
                {text: d_bot.btn_stack[lang], isUser: true},
                {text: d_bot.stack_response[lang], isUser: false},
            ])
        }, 800)

        setTimeout(() => {
            set_btns_visibility(true)
        }, 1200)
    }

    return (
        <div
            className="flex overflow-y-auto chat flex-col bg-white dark:bg-black_dark p-4 h-full  rounded-3xl bg-opacity-50 dark:bg-opacity-50 lg:rounded-4xl">
            {array.map((content, index) => {
                return (
                    <Message key={index} isUser={content.isUser}>
                        {content.text}
                    </Message>
                )
            })}

            {is_message ? (
                <div className={"transition-opacity duration-200 " + (!btns_visibility ? "opacity-0" : "")}>
                    <div className="flex flex-col">
                        <a
                            href="https://t.me/leosh1d"
                            className="rounded-3xl focus-visible:ring-4 ring-main relative my-2 flex flex-row justify-center cursor-pointer ml-auto p-4 font-bold bg-main bg-opacity-5 hover:bg-opacity-10 text-main duration-200 ease-out-quad"
                        >
                            {"\u00A0"}
                            Telegram
                        </a>
                        <a
                            href="mailto:i@leosh1d.ru"
                            className="rounded-3xl focus-visible:ring-4 ring-main my-2 cursor-pointer ml-auto p-4 font-bold bg-main text-main bg-opacity-5 hover:bg-opacity-10 duration-200 ease-out-quad"
                        >
                            ✉️ Mail
                        </a>
                        <ChatBtn onClick={return_}>
                            {d_bot.other[lang]}
                        </ChatBtn>
                    </div>
                </div>
            ) : (
                <div className={"transition-opacity duration-200 flex flex-col align-start p-4 gap-4 " + (!btns_visibility ? "opacity-0" : "")}>
                    <ChatBtn className='ml-auto' onClick={push__hello}>
                        {d_bot.btn_hello[lang]}
                    </ChatBtn>
                    <ChatBtn className='ml-auto' onClick={push__stack}>
                        {d_bot.btn_stack[lang]}
                    </ChatBtn>
                    <ChatBtn className='ml-auto' onClick={push__work}>
                        {d_bot.btn_work[lang]}
                    </ChatBtn>
                </div>
            )}
        </div>
    )
}

export default Contact_Chat
