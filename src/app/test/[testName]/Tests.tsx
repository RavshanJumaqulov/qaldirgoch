"use client";
import TestItem from "@/components/TestItem";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useRef, useState } from "react";
import { AlertInterface, AnswerInterface, ResultDataInterface, TestItemInterface, TestsInterface } from "../../../../types/TypeInterfaces";
import TestNumber from "./TestNumber";
import useWidth from "@/hooks/useWidth";
import CustomAlert from "@/components/CustomAlert";
import useVisiblity from "@/hooks/useVisiblity";
import ResultModal from "./ResultModal";


export default function Tests({ tests }: { tests: TestsInterface }) {
  const answerID = tests.quiz.quiztakers_set.usersanswer_set
  const [findTest, setFindTest] = useState<number>(0)
  const [allAnswer, setAllAnswer] = useState<AnswerInterface[]>(answerID)
  const [resultData, setResultData] = useState<null | ResultDataInterface>(null)
  const [boxWidth, setBoxWidth] = useState<number>()
  const boxRef = useRef<HTMLAnchorElement>(null)
  const { width } = useWidth()
  const [alert, setAlert] = useState<AlertInterface[]>([])
  const complete = useVisiblity(tests.quiz.quiztakers_set.completed)
  useEffect(() => {
    if (boxRef.current !== null) {
      const width: number = boxRef.current.getBoundingClientRect().width
      setBoxWidth(width)
    }
  }, [width])  

  const completed = async () => {
    const request = await fetch('http://localhost:3000/api/complete/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quiztaker: allAnswer[0].quiz_taker, slug: tests.quiz.slug }),
    })
    if (request.status == 200) {
      complete.show()
      // router.push('/results')
    }
    const resJson = await request.json();
    setResultData(resJson.data)
    setAlert([...alert, { success: resJson.success, message: resJson.message }])
  }

  useEffect(() => {
    setTimeout(() => setAlert(alert.slice(1)), 5000)
  }, [alert.length])
  return (
    <Container maxWidth="xl" sx={{ ml: 0, position: 'relative' }}>
      {
        alert.length > 0 && <CustomAlert alerts={alert} />
      }
      {resultData !== null ? <ResultModal resultData={resultData} /> : ''}
      <Grid2 container spacing={{ xs: 1, sm: 2 }} sx={{ mt: 2 }}>
        <Grid2 xs={12} md={8} lg={8}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            {tests.quiz.name}
          </Typography>
          {
            tests.quiz.question_set.map((el: TestItemInterface, index: number) => {
              return (
                <TestItem
                  key={index}
                  id={el.id}
                  item={el}
                  index={index}
                  findTest={findTest}
                  quiztaker={tests.quiz.quiztakers_set.usersanswer_set[0].quiz_taker}
                  answerId={answerID}
                  allAnswer={allAnswer}
                  setAllAnswer={setAllAnswer}
                />
              )
            })
          }
        </Grid2>
        <Grid2 xs={12} md={4} lg={4} sx={{ overflowX: 'hidden', mb: {xs: 5, md: 0} }}>
          <Box ref={boxRef} sx={{ position: 'relative !important', maxWidth: '100%', top: 0 }}>
            <Box sx={{ position: { xs: 'relative', md: 'fixed' }, width: boxWidth, zIndex: 200 }} >
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Boshqaruv
              </Typography>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    p: 2,
                    backgroundColor: "hsla(0,0%,100%,.05)",
                    borderRadius: "25px",
                    mb: 2,
                    userSelect: 'none',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',

                  }}
                >
                  {
                    allAnswer.map((el: AnswerInterface, index: number) => {
                      return (<TestNumber setFindTest={setFindTest} key={el.id} el={el} index={index} />)
                    })}
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    width: "100%",
                    p: 2,
                    backgroundColor: "hsla(0,0%,100%,.05)",
                    borderRadius: "25px",
                    mb: 2,
                    userSelect: 'none',
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',

                  }}
                >
                  <Button disabled={complete.visiblity} onClick={completed} size="large" sx={{ borderRadius: 3, width: '100%', }}>{complete.visiblity ? "Yakunlangan" : "Yakunlash"}</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
