"use client";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef, SetStateAction } from "react";
import { AnswerIdInterface, AnswerInterface, AnswerSetInterface, TestItemInterface } from "../../types/TypeInterfaces";
import Progress from "./Progress";

const AnswerChars: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function TestItem({
  findTest,
  id,
  item,
  index,
  quiztaker,
  answerId,
  allAnswer,
  setAllAnswer,
}: {
  findTest: number,
  id: number,
  item: TestItemInterface,
  index: number,
  quiztaker: number,
  answerId: AnswerIdInterface[],
  allAnswer: AnswerInterface[]
  setAllAnswer: React.Dispatch<SetStateAction<AnswerInterface[]>>
}) {
  const testItemRef = useRef<HTMLElement | null>(null)
  const [answer, setAnswer] = useState<null | number>(null)
  const [loading, setLoading] = useState<number>(0)
  console.log(findTest);
  const changeAnswer = async (id: number) => {
    setLoading(id)
    const res = await fetch('/api/saveAnswer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quiztaker: quiztaker, question: item.id, answer: id }),
    })
    const resJson = await res.json();
    setAnswer(id)
    setAllAnswer(
      allAnswer.map((i: AnswerIdInterface) => {
        if (i.question == item.id) {
          i.answer = id
        }
        return i
      })
    )
    setLoading(0)
  }
  const oldAnswer: AnswerIdInterface | undefined = answerId.find((el: AnswerIdInterface) => el.question == item.id)

  useEffect(() => {
    setAnswer(oldAnswer?.answer || null)
  }, [])

  useEffect(() => {
    if (testItemRef.current !== null) {
      const idAttribute = testItemRef.current.getAttribute('id');

      if (idAttribute !== null) {
        const idValue = parseInt(idAttribute, 10);
        if (!isNaN(idValue) && idValue === findTest) {
          window.scrollBy({
            top: testItemRef.current.getBoundingClientRect().top - 80,
            left: 0,
            behavior: "smooth"
          })
        }
      }
    }
  }, [findTest])

  return (
    <Box
      id={`${id}`}
      ref={testItemRef}
      sx={{
        width: "calc(100% - 100px)",
        p: 2,
        backgroundColor: "hsla(0,0%,100%,.05)",
        borderRadius: "25px",
        mb: 2,
        userSelect: 'none',
      }}
    >
      <Typography variant="body2" sx={{ textAlign: "left" }}>
        {index + 1 + '. '}{item.label}
      </Typography>

      {item.answer_set?.map(
        (el: AnswerSetInterface, index: number) => {
          return (
            <Box
              key={el.id}
              onClick={() => changeAnswer(el.id)}
              sx={{
                borderRadius: 4,
                background: "hsla(0,0%,100%,.1)",
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                p: 0,
                whiteSpace: 'normal',
                position: 'relative'
              }}
            >
              {loading == el.id && <Box sx={{
                py: 1,
                position: 'absolute',
                background: el.id == answer ? '#FF5C00' : 'none',
                minHeight: '100%',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                transition: '0.3s all',
                zIndex: -1,
                right: 10,
              }}>
                <Progress />
              </Box>}
              <Box sx={{
                py: 1,
                position: 'absolute',
                background: el.id == answer ? '#FF5C00' : 'none',
                minHeight: '100%',
                borderRadius: 4,
                minWidth: el.id == answer ? "100%" : '30px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                transition: '0.3s all',
                pl: 1,
                zIndex: -1
              }}>
                <Typography variant="body2" sx={{ textAlign: "left", }}>
                  {AnswerChars[index]}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{
                textAlign: "left", px: 1,
                py: 1,
                height: 'auto',
                ml: '30px'

              }}>
                {el.label}
              </Typography>
            </Box>
          );
        }
      )}
    </Box>
  );
}
