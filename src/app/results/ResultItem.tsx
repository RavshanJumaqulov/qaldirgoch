import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { HeadsInterface, MyResults } from '../../../types/TypeInterfaces'
import Link from 'next/link'

export default function ResultItem({ index, heads, result }: { index: number, heads: HeadsInterface[], result: MyResults }) {

    return (
        <Box sx={{
            mb: 2,
            borderRadius: 3,
            py: 2,
            px: 1.5,
            background: 'hsla(0,0%,100%,.1)',
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: 500,
            width: 'auto',

        }}>
            <Box sx={{ width: heads[0].width, pr: 1.5 }}>
                <Typography variant='body2' >
                    {index + 1}
                </Typography>
            </Box>
            <Box sx={{ width: heads[1].width, pr: 1.5 }}>
                <Typography variant='body2'>
                    {result.name}
                </Typography>
            </Box>
            <Box sx={{ width: heads[2].width, pr: 1.5 }}>
                <Typography variant='body2' >
                    {result.score == null ? 0 : result.score} / {result.questions_count}
                </Typography>
            </Box>
            <Box sx={{ width: heads[3].width, pr: 1.5 }}>
                <Typography variant='body2' >
                    {result.completed ? 'Yakunlangan' : 'Yakunlanmagan'}
                </Typography>
            </Box>
            <Box sx={{ width: heads[4].width, pr: 1.5 }}>
                <Typography variant='body2' sx={{ fontSize: 14 }} >
                    {!!result.timestamp && result.timestamp.slice(11, 16)}
                </Typography>
                <Typography variant='body2' sx={{ fontSize: 12 }} >
                    {!!result.timestamp && result.timestamp.slice(0, 10)}
                </Typography>
            </Box>
            <Box sx={{ width: heads[5].width, pr: 1.5 }}>
                <Typography variant='body2' sx={{ fontSize: 14 }}>
                    {!!result.date_finished && result.date_finished.slice(11, 16)}
                </Typography>
                <Typography variant='body2' sx={{ fontSize: 12 }}>
                    {!!result.date_finished && result.date_finished.slice(0, 10)}
                </Typography>
            </Box>
            <Box sx={{ width: heads[6].width, pr: 1.5 }}>
                {result.completed ?
                    <Button disabled sx={{ px: 1, background: 'hsla(0, 0%, 100%, 0.1)', fontWeight: 400, fontSize: 16, borderRadius: 3 }}>
                        Davom ettirish
                    </Button>
                    :
                    <Button component={Link} href={`test/${result.slug}/`} sx={{ px: 1, background: 'hsla(0, 0%, 100%, 0.1)', fontWeight: 400, fontSize: 16, borderRadius: 3 }}>
                        Davom ettirish
                    </Button>}
            </Box>
        </Box>
    )
}
