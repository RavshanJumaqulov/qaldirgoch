'use client'
import { useState, useCallback } from "react"

const useVisiblity = (defaultValue?:boolean) => {

    const [visiblity, setVisiblity] = useState(defaultValue || false);

    const show = useCallback(() => {
        setVisiblity(true)
    }, [])


    const hide = useCallback(() => {
        setVisiblity(false)
    }, [])

    const toggle = useCallback(() => {
        setVisiblity(v => !v)
    }, [])

    return {
        visiblity,
        show,
        hide, 
        toggle
    }
}


export default useVisiblity