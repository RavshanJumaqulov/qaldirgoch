import { Alert, Box } from '@mui/material'
import React from 'react'
import { AlertInterface } from '../../types/TypeInterfaces'

export default function CustomAlert({ alerts }: { alerts: AlertInterface[] }) {
    return (
        <Box sx={{
            pt: { xs: 1, sm: 2, md: 3 },
            pr: { xs: 1, sm: 2, md: 3 },
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <Box sx={{ maxWidth: '90%', width: 500, }}>
                {
                    alerts.map((el: AlertInterface, index: number) => {
                        return (
                            <Alert key={index} variant='outlined' severity={el.success ? "success" : "error"} sx={{ mb: 1, }}>{el.message}</Alert>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
