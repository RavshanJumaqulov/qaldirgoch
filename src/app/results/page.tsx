import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { HeadsInterface, MyResults } from '../../../types/TypeInterfaces'
import { api } from '../api/lib/api';
import ResultItem from './ResultItem';

const fetchResults = async () => {
  const request = await api({
    method: 'get',
    url: `/my-quizzes/`
  });
  return request.data;
}

const heads: HeadsInterface[] = [
  { name: 'T/R', width: 40, key: 'id' },
  { name: 'Fanning nomi', width: 200, key: 'name' },
  { name: "Natija", width: 80, key: 'score' },
  { name: "Status", width: 130, key: 'completed' },
  { name: "Boshlash vaqti", width: 150, key: 'score' },
  { name: "Yakunlash vaqti", width: 150, key: 'score' },
  { name: "Yo'naltirish", width: 150, key: 'score' },
]

export default async function page() {
  const results: MyResults[] = await fetchResults()

  return (
    <Container maxWidth="xl" sx={{ ml: 0, }}>
      <Typography variant='subtitle2'>
        Barcha natijalar
      </Typography>
      <Box sx={{ mt: 6, overflowX: 'auto', }}>
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

        }}>
          {
            heads.map((el: HeadsInterface, index: number) => {
              return (
                <Box key={index + 1} sx={{ width: el.width, pr: 1.5 }}>
                  <Typography sx={{ color: "#fff", fontSize: 16, textAlign: 'left' }}>
                    {el.name}
                  </Typography>
                </Box>
              )
            })
          }
        </Box>
        {
          results.map((el: MyResults, index: number) => {
            return (
              <ResultItem key={el.id} index={index} heads={heads} result={el} />
            )
          })
        }
      </Box>
    </Container>
  )
}
