import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { Control, Path, useController } from 'react-hook-form'

interface SelectType<FormNames extends Record<string, any>> {
    label?: string
    control: Control<FormNames>
    name: Path<FormNames>
    required?: boolean
    accept?: string
    options?: OptionsInterface[]
}

interface OptionsInterface {
    label: string
    id: number
}

export default function CustomSelect<FormNames extends Record<string, any>>({
    label,
    name,
    control,
    required = false,
    options
}: SelectType<FormNames>) {

    const { field, fieldState } = useController({
        name: name,
        control,
        rules: {
            required: {
                value: required,
                message: 'Ma\'lumotlardan birini tanlang!',
            },
        },
    })
    return (
        <Box sx={{
            "& .MuiInputBase-root": {
                borderRadius: 3,
                px: 1,
                fontSize: 16,
                fontWeight: 500,
                "& fieldset": {
                    border: theme => `1px solid ${theme.palette.secondary.main}`,
                },
                "&:hover": {
                    "& fieldset": {
                        borderColor: theme => theme.palette.primary.main,
                    },
                },
                "& .MuiSelect-select": {
                    py: 2,
                    px: 1,
                    textAlign: "left",
                },
                "& .MuiSelect-root": {
                    maxHeight: 200,
                    "&:hover": {
                        "& fieldset": {
                            borderColor: theme => `${theme.palette.secondary.main} !important`,
                        },
                    },
                },
                "&.Mui-focused": {
                    color: theme => theme.palette.active.main,
                    '& fieldset': {
                        borderColor: theme => theme.palette.active.main,
                        borderWidth: 2,
                    },
                },
            },

        }}>
            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontSize: 16, fontWeight: 500 }}
                >
                    {label}
                </InputLabel>
                <Select
                    error={!!fieldState.error}
                    label={label}
                    value={field.value}
                    MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}

                    sx={{
                        borderRadius: 2
                    }}>
                    {
                        options && options.map((el: OptionsInterface) => <MenuItem
                            onClick={() => field.onChange(el.id)}
                            key={el.id}
                            value={el.id}
                            sx={{ fontSize: 16, maxHeight: 100 }}

                        >
                            {el.label}
                        </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            {
                fieldState.error && <Typography sx={{ fontSize: 14, textAlign: 'left' }} color='error.main'>
                    {fieldState.error.message}
                </Typography>
            }
        </Box>
    )
}
