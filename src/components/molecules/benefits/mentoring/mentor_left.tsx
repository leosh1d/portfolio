import {motion, useAnimation} from 'motion/react';
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const MentorLeft = () => {
    const [ref, inView] = useInView({ threshold: 0.9, triggerOnce: true })

    const variants = {
        hidden: {
            opacity: 0,
            x: '50%'
        },
        visible: {
            opacity: 1,
            x:  0
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


    return <motion.svg ref={ref} initial='hidden' transition={{duration: 1, type: 'spring'}} animate={animation} variants={variants} width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M62.5 0.5C70.7217 0.5 78.6067 3.76606 84.4203 9.57969C90.2339 15.3933 93.5 23.2783 93.5 31.5C93.5 39.7217 90.2339 47.6067 84.4203 53.4203C78.6067 59.2339 70.7217 62.5 62.5 62.5C54.2783 62.5 46.3933 59.2339 40.5797 53.4203C34.7661 47.6067 31.5 39.7217 31.5 31.5C31.5 23.2783 34.7661 15.3933 40.5797 9.57969C46.3933 3.76606 54.2783 0.5 62.5 0.5ZM62.5 78C96.755 78 124.5 91.8725 124.5 109V120.094C124.5 122.527 122.527 124.5 120.094 124.5H4.90609C2.47268 124.5 0.5 122.527 0.5 120.094V109C0.5 91.8725 28.245 78 62.5 78Z"
            fill="currentColor"/>
    </motion.svg>

}

export default MentorLeft