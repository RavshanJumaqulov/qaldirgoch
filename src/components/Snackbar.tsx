import { MainContext, ContextType } from '@/context/Context'
import { AlertProps, Alert as MuiAlert, Snackbar as MuiSnackbar, Stack } from '@mui/material'
import React, { forwardRef, useContext } from 'react'

export type statusT = 'success' | 'error' | 'info'

type T = {
    open: boolean
    status: statusT
    message: string
    close: () => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Snackbar: React.FC<T> = ({ open, status, message, close }) => {
    const {
        actions: { closeSnackbar },
    } = useContext<ContextType>(MainContext)
    const severity = ['success', 'info', 'error']?.find((item) => item === status)

    return (
        <Stack
            spacing={2}
            sx={{
                width: '100%',
                zIndex: 1,
            }}
        >
            <MuiSnackbar
                open={open}
                autoHideDuration={2000}
                onClose={close}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{ width: '300px' }}
            >
                <Alert
                    onClose={closeSnackbar}
                    severity={severity as statusT}
                    sx={{
                        width: '350px',
                        textAlign: 'left',
                        fontSize: 16,
                        color: theme => theme.palette.primary.main,
                        fontWeight: 400
                    }}>
                    {message}
                </Alert>
            </MuiSnackbar>
        </Stack>
    )
}

export default Snackbar
