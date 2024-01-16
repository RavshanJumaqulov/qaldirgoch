import { Box, Stack, TextField, TextFieldVariants, Typography } from '@mui/material'
import React from 'react'
import { Control, Path, useController } from 'react-hook-form'

interface FileType<FormNames extends Record<string, any>> {
    control: Control<FormNames>
    name: Path<FormNames>
    required?: boolean
    defaultValue?: string
    label?: string
    placeholder?: string
    disabled?: boolean
    type?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined
    className?: string
    variant?: TextFieldVariants
    min?: number
    max?: number
    defaultLabel?: string
    borderRadius?: number
    minLength?: number
}

export default function CustomTextField<FormNames extends Record<string, any>>({
    name,
    control,
    required = false,
    defaultValue = '',
    label,
    placeholder,
    disabled = false,
    type = 'text',
    className,
    variant = 'outlined',
    min,
    max,
    defaultLabel,
    borderRadius = 3,
    minLength=0
}: FileType<FormNames>) {
    const { field, fieldState } = useController({
        name: name,
        control,
        rules: {
            required: {
                value: required,
                message: 'Maydonni to\'ldiring!',
            },
            minLength: {
                value: minLength,
                message: "Kamida 3 tab legi kiriting!"
            }
        },
    })
    return (
        <Box sx={{
            '& div': { p: '0px !important' },
            "& .MuiFormLabel-root": {
                fontSize: '16px !important',
            },
            "& input": {
                color: '#fff',
                transition: "all 5000s ease-in-out 0s",
                "&:hover": {
                    borderColor: theme => theme.palette.active.main,
                    color: theme => theme.palette.active.main,
                },
                "&:focus": {
                    outline: "none",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "#FF5C00",
                },
                "&:autofill": {
                    background: "none !important",
                    color: theme => theme.palette.primary.main,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: theme => theme.palette.primary.main,
                    transition: "all 5000s ease-in-out 0s",
                },
                "&:-webkit-autofill": {
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: theme => theme.palette.primary.main,
                    transition: "all 5000s ease-in-out 0s",
                    "&:hover": {
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: theme => theme.palette.primary.main,
                        transition: "all 5000s ease-in-out 0s",
                    },
                    "&:focus": {
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: theme => theme.palette.active.main,
                        transition: "all 5000s ease-in-out 0s",
                    },
                    "&:active": {
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: theme => theme.palette.active.main,
                        transition: "all 5000s ease-in-out 0s",
                    },
                    background: "none !important",
                },
                "&:-internal-autofill-selected": {
                    background: "none !important",
                    backgroundColor: "none",
                },
            },
        }}>
            {
                defaultLabel && <Stack direction={'row'} alignItems={'center'}>
                    <Typography variant='subtitle2' sx={{ fontSize: 16, fontWeight: 600, lineHeight: '36px' }}>
                        {defaultLabel}
                    </Typography> {
                        required && <>
                            <Typography variant='subtitle2' sx={{ fontSize: 16, fontWeight: 600, lineHeight: '36px' }}>
                                &nbsp;(
                            </Typography>
                            <Typography variant='subtitle2' sx={{ fontSize: 16, fontWeight: 600, lineHeight: '36px', color: 'error.main' }}>
                                majburiy
                            </Typography>
                            <Typography variant='subtitle2' sx={{ fontSize: 16, fontWeight: 600, lineHeight: '36px' }}>
                                )
                            </Typography>
                        </>
                    }
                </Stack>
            }
            <TextField
                variant={variant}
                label={label}
                placeholder={placeholder}
                disabled={disabled}
                id={name}
                error={!!fieldState.error}
                className={className}
                inputProps={{ min: min, max: max }}
                inputMode={type}
                sx={{
                    m: 0,
                    width: '100%',
                    '& fieldset': {
                        borderRadius: borderRadius,
                        borderColor: theme => theme.palette.secondary.main
                    },
                    '& .Mui-focused': {
                        '& fieldset': {
                            borderRadius: borderRadius,
                            borderColor: theme => `${theme.palette.active.main} !important`
                        },
                    },
                    '& input': {
                        fontSize: 16,
                    }
                }}
                {...field}
            />
            {!!fieldState.error && <Typography sx={{ fontSize: 14, textAlign: 'left' }} color='error.main'>{fieldState.error.message}</Typography>}
        </Box>
    )
}
