import React, {useEffect, useState, useRef} from "react"

import {motion, useSpring} from "motion/react"
import Heading from "../atoms/heading"
import Subheading from "../atoms/subheading"
import {DynamicImg} from "../atoms/DynamicImg"

import {useRouter} from "next/router"
import Markdown from "markdown-to-jsx"
import {debounce} from "next/dist/server/utils";
import {LI} from "../atoms/li";
import {UL} from "../atoms/ul";

interface ProjectProps {
    title: string
    src: string
    md: string
    stack: string
    height: number
    width: number
}

export default function Project({src, title, md = "", stack}: ProjectProps) {
    const [isOpened, setIsOpened] = useState(false)

    const [isAnimating, setIsAnimating] = useState(false)

    const y = useSpring(0)

    const parentBox = useRef<HTMLDivElement>(null)

    const router = useRouter()

    useEffect(() => {
        const offScroll = async () => {
            await smoothScroll(parentBox.current)
            document.body.style.overflow = "auto"
            setIsOpened(false)
        }
        if (router.query.project === title.toLocaleLowerCase()) {
            setIsOpened(true)
        } else {
            offScroll()
        }
    }, [router.query, title])

    const AnimationStart = () => {
        setIsAnimating(true)
    }

    const AnimationEnd = () => {
        setIsAnimating(false)
    }

    const handleOn = () => {
        document.body.style.overflow = "hidden"
        y.set(0)
        router.push(`/?project=${title.toLowerCase()}`, `/?project=${title.toLowerCase()}`, {shallow: true})
    }

    const handleOff = () => {
        y.set(0)
        router.push(`/`, `/`, {shallow: true})
    }

    const smoothScroll = (element: HTMLDivElement | null) => {
        element?.scrollTo({
            top: 0,
            behavior: "smooth",
        })

        return new Promise<void>((resolve, reject) => {
            const failed = setTimeout(() => {
                reject(element?.scrollTop)
            }, 2000)
            const scrollHandler = () => {
                if (element?.scrollTop === 0) {
                    element.removeEventListener("scroll", scrollHandler)
                    clearTimeout(failed)
                    resolve()
                }
            }
            if (element?.scrollTop === 0) {
                clearTimeout(failed)
                resolve()
            } else {
                element?.addEventListener("scroll", scrollHandler)
            }
        })
    }

    const resetYDebounce = debounce(() => {
        y.set(0)
    }, 300)

    const onWheelEvent: React.WheelEventHandler<HTMLDivElement> = (e) => {
        if (isOpened) {
            const deltaY = e.deltaY;
            const scrollTop = parentBox?.current?.scrollTop || 0;
            resetYDebounce()
            const currentY = y.get()
            const yValToClose = -150
            if (currentY < yValToClose) {
                handleOff()
            } else if (scrollTop === 0 && deltaY < 0 && !isAnimating) {
                y.jump(currentY + deltaY)
            }
        }
    }

    const transition = {type: "spring", bounce: 0, duration: 0.5}
    return (
        <div className={`relative pt-[75%] ${isAnimating || isOpened ? "z-30" : ""}`}>
            <div
                className={`flex ${
                    isOpened ? "fixed w-screen top-0 left-0 justify-center items-end md:items-center h-screen" : ""
                }`}
            >
                <motion.div
                    layout
                    transition={transition}
                    ref={parentBox}
                    layoutScroll
                    style={{y}}
                    onWheel={onWheelEvent}
                    initial={{borderRadius: 24}}
                    onLayoutAnimationStart={AnimationStart}
                    onLayoutAnimationComplete={AnimationEnd}
                    className={`absolute w-full flex flex-col rounded-3xl scroll-smooth bg-white overflow-x-hidden dark:bg-black_medium ${
                        isOpened
                            ? "md:container z-20 overflow-y-auto h-[85%] lg:h-[90%]"
                            : " top-0 h-full overflow-hidden cursor-pointer"
                    }`}
                    onClick={handleOn}
                >
                    <motion.div layout="position" transition={transition} className="absolute z-20 top-4 left-4">
                        <Subheading additional_class="text-white text-sm lg:text-lg ">{stack}</Subheading>
                        <Heading additional_class="text-white">{title}</Heading>
                    </motion.div>

                    <motion.div
                        layout
                        transition={transition}
                        className="overflow-hidden relative"
                        initial={{borderRadius: 24}}
                        animate={isOpened ? {paddingTop: "56.25%", borderRadius: 24} : {
                            paddingTop: "75%",
                            borderRadius: 24
                        }}
                    >
                        <DynamicImg src={src} layout="fill" objectFit="cover" alt="cover of project"/>
                    </motion.div>

                    <motion.div layout="position" transition={transition} className="w-screen">
                        <div className="container p-8 flex flex-col gap-4 md">
                            <Markdown
                                options={{
                                    wrapper: React.Fragment,
                                    overrides: {
                                        li: {component: LI},
                                        ul: {component: UL},
                                        a: {
                                            props: {
                                                rel: "noopener noreferrer",
                                                target: '_blank'
                                            }
                                        },
                                        img: {
                                            component: DynamicImg,
                                            props: {
                                                className: "rounded-3xl",
                                                layout: "intrinsic",
                                                width: 800,
                                                height: 450,
                                                parentClass: "flex justify-center w-full p-8",
                                            },
                                        },
                                    },
                                }}
                            >
                                {md}
                            </Markdown>
                        </div>
                    </motion.div>
                </motion.div>
                <button
                    aria-label="close overlay"
                    onClick={handleOff}
                    className={`z-10 fixed w-screen transition h-screen top-0 left-0 ${
                        isOpened ? "bg-black/20" : "pointer-events-none"
                    }`}
                />
            </div>
        </div>
    )
}
