"use client";
import TestItem from "@/components/TestItem";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AnswerInterface, ResultDataInterface, TestItemInterface, TestsInterface } from "../../../../types/TypeInterfaces";
import TestNumber from "./TestNumber";
import useVisiblity from "@/hooks/useVisiblity";
import ResultModal from "./ResultModal";
import CustomButton from "@/components/commond/CustomButton";
import { useRouter } from "next/navigation";
import { ErrorIcon } from "@/app/SvgIcons/Icons";
import { ContextType, MainContext } from "@/context/Context";


export default function Tests({ tests }: { tests: TestsInterface }) {
  const answerID = tests.quiz.quiztakers_set.usersanswer_set
  const [findTest, setFindTest] = useState<number>(0)
  const [allAnswer, setAllAnswer] = useState<AnswerInterface[]>(answerID)
  const [resultData, setResultData] = useState<null | ResultDataInterface>(null)
  const [boxWidth, setBoxWidth] = useState<number>()
  const boxRef = useRef<HTMLAnchorElement>(null)
  const router = useRouter()
  const {
    actions: { openSnackbar },
    state: { width }
  } = useContext<ContextType>(MainContext)
  const complete = useVisiblity(tests.quiz.quiztakers_set.completed)
  useEffect(() => {
    if (boxRef.current !== null) {
      const width: number = boxRef.current.getBoundingClientRect().width
      setBoxWidth(width)
    }
  }, [width])

  const completed = async () => {
    const request = await fetch('/api/complete/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quiztaker: allAnswer[0].quiz_taker, slug: tests.quiz.slug }),
    })
    const resJson = await request.json();
    if (request.status == 200) {
      complete.show()
      openSnackbar({ message: "Test yakunlandi", status: 'success' })
      router.push('/results')
    }
    setResultData(resJson.data)
  }

  const startDate = new Date(tests.quiz.quiztakers_set.timestamp)
  const currentDate = new Date()
  const timeDifference = currentDate.getTime() - startDate.getTime();

  if (timeDifference > 1 * 60 * 1000) {
    completed()
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
            Ushbu test uchun ajratilgan vaqt o`z nihoyasiga yetgan
          </Typography>
          <Button onClick={() => router.push('/tests')} sx={{ background: 'hsla(0, 0%, 100%, 0.1)', fontWeight: 400, fontSize: 16, borderRadius: 3 }}>
            Ortga qaytish
          </Button>
        </Box>
      </Container>
    )
  }
  else {
    // const [timer, setTimer] = useState(60)
    setTimeout(() => {
      completed()
    }, 1 * 60 * 1000 - timeDifference);
    // useEffect(() => {
    //   if (resultData !== null) {
    //     const interval = setInterval(() => {
    //       setTimer((prevCounter) => prevCounter - 1);
    //     }, 1000);

    //     if (timer <= 0) {
    //       clearInterval(interval)
    //       router.push('/tests', { scroll: false })
    //     }
    //     return () => clearInterval(interval);
    //   }
    // }, [timer])

    return (
      <Container
        maxWidth="xl"
        sx={{
          ml: 0,
          position: 'relative',
        }}>
        <Box
          sx={{
            width: '100%',
            height: 5,
            background: theme => theme.palette.active.main,
            position: 'fixed',
            top: 86,
            left: 0
          }} />
        {resultData !== null ? <ResultModal resultData={resultData} /> : ''}
        <Grid2 container spacing={{ xs: 1, sm: 2 }} sx={{ mt: 2, }}>
          <Grid2 xs={12} md={8} lg={8} >
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
          <Grid2 xs={12} md={4} lg={4} sx={{ overflowX: 'hidden', mb: { xs: 5, md: 0 } }}>
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
                    <CustomButton
                      title={complete.visiblity ? "Yakunlangan" : "Yakunlash"}
                      disabled={complete.visiblity}
                      onClick={completed}
                      size="large"
                      sx={{ borderRadius: 3, width: '100%', }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    );
  }

}
