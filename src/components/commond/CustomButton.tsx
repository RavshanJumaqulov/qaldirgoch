import { Button, SxProps, Theme } from '@mui/material'
import React from 'react'

export default function CustomButton({
    sx,
    title,
    disabled = false,
    disableElevation = false,
    type = 'button'
}: {
    sx?: SxProps<Theme> | undefined,
    title: string,
    disabled?: boolean,
    disableElevation?: boolean,
    type?: 'button' | 'submit' | 'reset' | undefined
}) {
    return (
        <Button
            disabled={disabled}
            disableElevation
            type={type}
            sx={{
                background: theme => theme.palette.active.main,
                borderRadius: 3,
                padding: "6px 12px",
                fontWeight: 500,
                fontFamily: 'Open-Sans, sans-serif',
                fontSize: 20,
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
                textTransform: 'full-size-kana',
                color: disabled ? 'rgba(255, 255, 255, 0.5) !important' : theme => theme.palette.primary.main,
                ...sx,
            }}>
            {title}
        </Button>
    )
}
