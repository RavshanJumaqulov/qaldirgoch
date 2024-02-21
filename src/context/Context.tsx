'use client'
import { createContext, useContext, useEffect, useState } from "react";
import Snackbar from "@/components/Snackbar";
type snackbarT = {
    message: string
    status: string
}

export const MainContext = createContext<any>(undefined)
export const useMainContext = () => useContext<ContextType>(MainContext)
const useMain = () => {
    const [snackbar, setSnackbar] = useState({
        message: '',
        open: false,
        status: '',
    })

    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth)
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    const openSnackbar = ({ message, status }: snackbarT) =>
        setSnackbar({ open: true, message, status })
    const closeSnackbar = () => setSnackbar({ open: false, message: '', status: '' })
    return {
        state: {
            snackbar,
            width
        },
        actions: {
            openSnackbar,
            closeSnackbar,
        },
    }
}

export type ContextType = ReturnType<typeof useMain>

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const value = useMain()

    return (
        <MainContext.Provider value={value}>
            <Snackbar
                message={value.state.snackbar.message}
                open={value.state.snackbar.open}
                status={value.state.snackbar.status as 'success' | 'error' | 'info'}
                close={value.actions.closeSnackbar}
            />
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider
