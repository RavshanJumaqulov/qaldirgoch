'use client'
import { useState, useCallback, useEffect } from "react"

const useWidth = () => {

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])


    window.addEventListener('resize', useCallback(() => {
        setWidth(window.innerWidth)
    }, []))
    return {
        width,
    }
}


export default useWidth