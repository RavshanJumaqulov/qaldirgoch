import { CircularProgress } from '@mui/material'
import React from 'react'

export default function CustomProgress({ size = 20 }: { size?: number }) {
    return (
        <CircularProgress
            sx={{
                width: size,
                height: size,
                fontSize: size,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': {
                    fontSize: size,
                    width: size,
                    height: size
                }
            }} />
    )
}
