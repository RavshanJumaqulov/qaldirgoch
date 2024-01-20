import { api } from "@/app/api/lib/api";
import AllTests from "@/components/AllTests";
import SubjectsSlider from "@/components/SubjectsSlider";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { themesInterface } from "../../../../../types/TypeInterfaces";
import CustomPagination from "@/components/commond/CustomPagination";

interface fetchThemesInterface {
  results?: themesInterface[]
  count?: number,
  next?: null | string,
  previous?: null | string,
  detail?: string
}


async function fetchSubjects() {
  const subject = await api({
    method: 'get',
    url: '/fanlar',
  })

  if (subject?.status == 200) {
    return subject.data
  }
  return { detail: "Ma'lumotlarni yuklashning imkoni bo'lmadi" }
}

async function fetchThemes() {
  const request = await api<fetchThemesInterface>({
    method: 'get',
    url: `/quizzes?page=${1}`,
  })

  if (request?.status == 200) {
    return request.data
  }
  return { detail: "Ma'lumotlarni yuklashning imkoni bo'lmadi" }
}

export default async function Subject({
  params,
}: {
  params: { subject: string };
}) {
  const data = await fetchSubjects()
  const themes = await fetchThemes()  
  return (
    <Box sx={{ maxWidth: "100vw", minHeight: "100vh", overflow: "hidden" }}>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ ml: 0 }}>
          <SubjectsSlider subjects={data} params={params.subject} />
          <AllTests themes={themes.results} />
          <Stack direction={'row'} justifyContent={'flex-end'} sx={{ mt: 2 }}>
            <CustomPagination count={themes.count as number} page={'1'} pathname={`/tests/subject/${params.subject}`} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
