import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function ResultModalItem({ title, value }: { title: string, value: number | string }) {
    return (
        <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%', px: 1 }}>
            <Typography variant='body2'>
                {title}
            </Typography>
            <Typography variant='body2'>
                {value}
            </Typography>
        </Stack>
    )
}
