import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Progress() {
    return (
        <CircularProgress sx={{ maxWidth: 20, maxHeight: 20, fontSize: 20, '& svg': { width: 20, height: 20, fontSize: 20 } }} />
    )
}
