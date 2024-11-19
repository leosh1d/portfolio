import {motion, useAnimation} from 'motion/react';
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export const MentorRight = ()=> {


        const [ref, inView] = useInView({ threshold: 0.9, triggerOnce: true })

        const variants = {
            hidden: {
                x: '-100%',
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
            },
        }

        const animation = useAnimation()

        useEffect(() => {
            if (inView) {
                animation.start("visible")
            } else {
                animation.start("hidden")
            }
        }, [animation, inView])


    return <motion.svg ref={ref} initial='hidden' transition={{duration: 1, type: 'spring', delay: 0.5}} animate={animation} variants={variants} width="95" height="125" viewBox="0 0 95 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M28.0231 124.5H90.0584C92.5114 124.5 94.5 122.527 94.5 120.094V109C94.5 91.8725 66.5313 78 32 78C25.1485 78 18.5553 78.5461 12.3877 79.5555C21.255 86.4239 28.5 96.1679 28.5 109V120.094C28.5 121.607 28.3354 123.081 28.0231 124.5Z"
            fill="currentColor"/>
        <path
            d="M54.0971 9.57969C48.2366 3.76606 40.288 0.5 32 0.5C23.712 0.5 15.7634 3.76606 9.90291 9.57969C4.0424 15.3933 0.75 23.2783 0.75 31.5C0.75 39.7217 4.0424 47.6067 9.90291 53.4203C15.7634 59.2339 23.712 62.5 32 62.5C40.288 62.5 48.2366 59.2339 54.0971 53.4203C59.9576 47.6067 63.25 39.7217 63.25 31.5C63.25 23.2783 59.9576 15.3933 54.0971 9.57969Z"
            fill="currentColor"/>
    </motion.svg>
}

export default MentorRight