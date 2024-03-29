import { Box } from "@mui/material";
import React from "react";
import Tests from "./Tests";
import { api } from "@/app/api/lib/api";
import { TestsInterface } from "../../../../types/TypeInterfaces";
import { redirect } from "next/navigation";
import TestError from "./TestError";

interface paramsInterface {
  testName: string;
}

const fetchTest = async (name: string) => {
  const request = await api({
    method: 'get',
    url: `/quizzes/${name}`
  });
  if (request?.data?.quiz && request?.data?.quiz.quiztakers_set.completed) {
    redirect('/tests')
  }
  return request.data;
}

export default async function TestId({ params }: { params: paramsInterface }) {
  const tests: TestsInterface = await fetchTest(params.testName)

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: "100%",
        minHeight: "calc(100vh - 40px)",
        overflow: "hidden",
      }}>
      <Box sx={{ width: "100%", mt: 10, }}>
        {
          tests.detail ? <TestError error={tests.detail} /> : <Tests tests={tests} />
        }
      </Box>
    </Box>
  );
}
