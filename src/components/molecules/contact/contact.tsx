import React from "react"
import Contact_Btn from "./contact_btn"
import {AnimatePresence} from "motion/react"


const Contact = () => {
    return (
        <AnimatePresence>
            <Contact_Btn key="btn" onClick={() => {
                window.open('https://t.me/leosh1d', '_blank', 'noopener,noreferrer'); // Open in a new tab
            }} is_open={false}/>
        </AnimatePresence>
    )
}

export default Contact
