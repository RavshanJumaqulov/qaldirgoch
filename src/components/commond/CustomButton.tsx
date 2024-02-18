'use client'
import { Button, SxProps, Theme } from '@mui/material'
import React from 'react'

export default function CustomButton({
    sx,
    title,
    disabled = false,
    disableElevation = false,
    type = 'button',
    size = "medium",
    onClick,
    component = 'button',
    href,
    endIcon
}: {
    sx?: SxProps<Theme> | undefined,
    title: string,
    disabled?: boolean,
    disableElevation?: boolean,
    type?: 'button' | 'submit' | 'reset' | undefined,
    size?: "medium" | "small" | "large"
    onClick?: () => any,
    component?: any,
    href?: string,
    endIcon?: React.ReactNode
}) {
    return (
        <Button
            disabled={disabled}
            disableElevation
            type={type}
            size={size}
            onClick={onClick}
            component={component}
            href={href}
            endIcon={endIcon}
            sx={{
                background: theme => theme.palette.active.main,
                borderRadius: 3,
                padding: "6px 12px",
                fontWeight: 500,
                fontFamily: 'Open-Sans, sans-serif',
                fontSize: 16,
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
                textTransform: 'full-size-kana',
                color: disabled ? 'rgba(255, 255, 255, 0.5) !important' : theme => theme.palette.primary.main,
                transitionProperty:
                    "color,background-color,border-color,text-decoration-color,fill,stroke",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                transitionDuration: "0.15s",
                '& svg': {
                    color: disabled ? 'rgba(255, 255, 255, 0.5) !important' : theme => theme.palette.primary.main,
                    fill: disabled ? 'rgba(255, 255, 255, 0.5) !important' : theme => theme.palette.primary.main,
                },
                ...sx,
            }}>
            {title}
        </Button>
    )
}
