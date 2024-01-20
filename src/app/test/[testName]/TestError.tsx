'use client'
import { ErrorIcon } from '@/app/SvgIcons/Icons'
import { Box, Button, Container, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TestError({ error }: { error: string }) {
    const router = useRouter()
    return (
        <Container
            maxWidth="xl"
            sx={{
                ml: 0,
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 150px)'
            }}>
            <Box
                sx={{
                    width: "90%",
                    maxWidth: 500,
                    p: 2,
                    backgroundColor: "hsla(0,0%,100%,.05)",
                    borderRadius: "25px",
                    mb: 2,
                    userSelect: 'none',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <ErrorIcon color='error' />
                <Typography variant='body2' sx={{ color: 'error.main', textAlign: 'center', width: '100%' }}>
                    {error}
                </Typography>
                <Button onClick={() => router.back()} sx={{ background: 'hsla(0, 0%, 100%, 0.1)', fontWeight: 400, fontSize: 16, borderRadius: 3 }}>
                    Ortga qaytish
                </Button>
            </Box>
        </Container>
    )
}
