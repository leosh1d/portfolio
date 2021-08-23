import React from 'react'

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({children}: WrapperProps)=> {
    return <div className="flex justify-center w-screen">
        {children}
    </div>
}

export default Wrapper