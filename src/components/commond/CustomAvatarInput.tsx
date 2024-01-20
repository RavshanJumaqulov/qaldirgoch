'use client'
import { Box } from '@mui/material'
import React from 'react'

export default function CustomAvatarInput() {
    return (
        <Box sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            border: theme => `1px solid ${theme.palette.secondary.main}`
        }}>
            <Box component={'img'} src='' />
        </Box>
    )
}
