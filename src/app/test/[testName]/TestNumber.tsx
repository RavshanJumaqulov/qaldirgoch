import { Box } from '@mui/material'
import React from 'react'
import { AnswerInterface } from '../../../../types/TypeInterfaces'

export default function TestNumber({ setFindTest, el, index }: { setFindTest: React.Dispatch<React.SetStateAction<number>>, el: AnswerInterface, index: number }) {
    return (
        <Box
            onClick={() => {setFindTest(el.question)}}
            sx={{
                width: 40,
                height: 40,
                background: el.answer == null ? "hsla(0,0%,100%,.1)" : '#FF5C00',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: (theme) => theme.palette.secondary.main
            }}>
            {index + 1}
        </Box>
    )
}
