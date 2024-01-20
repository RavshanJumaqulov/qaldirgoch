'use client'
import { Box, Button, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import ResultModalItem from './ResultModalItem'
import { ResultDataInterface } from '../../../../types/TypeInterfaces'
import { redirect, useRouter } from 'next/navigation'

export default function ResultModal({ resultData }: { resultData: ResultDataInterface }) {
    const [timer, setTimer] = useState(10)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevCounter) => prevCounter - 1);
        }, 1000);

        if (timer <= 0) {
            clearInterval(interval)
            redirect('/tests')
        }
        return () => clearInterval(interval);
    }, [timer])
    return (
        <Box sx={{
            position: 'fixed',
            height: 'calc(100vh - 80px)',
            width: '100%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
        }}>
            <Box
                sx={{
                    width: "90%",
                    minHeight: 100,
                    maxWidth: 500,
                    p: 2,
                    backgroundColor: "hsla(0,0%,100%, 0.1)",
                    backdropFilter: 'blur(20px)',
                    borderRadius: "25px",
                    mb: 2,
                    userSelect: 'none',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    position: 'absolute',
                    zIndex: 100
                }}
            >
                <Typography variant='subtitle2' sx={{ mb: 2 }}>Mening natijalarim</Typography>
                <ResultModalItem title="Testlar soni" value={resultData.question_set.length} />
                <ResultModalItem title="To'g'ri javoblar soni" value={resultData.quiztaker_set.score} />
                <ResultModalItem title="Natija foiz(%)larda" value={`${Math.round(resultData.quiztaker_set.score / resultData.question_set.length * 100)} %`} />
                <ResultModalItem title="Baho" value={`${Math.round(resultData.quiztaker_set.score / resultData.question_set.length * 5)}`} />

                <Button onClick={() => router.push('/tests', { scroll: false })} sx={{ background: 'hsla(0, 0%, 100%, 0.1)', fontWeight: 400, fontSize: 16, borderRadius: 3 }}>
                    ({timer}) Ortga qaytish
                </Button>
            </Box>
        </Box>
    )
}
