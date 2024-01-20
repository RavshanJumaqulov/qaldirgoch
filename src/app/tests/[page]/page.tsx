import React from "react";
import SubjectsSlider from "@/components/SubjectsSlider";
import AllTests from "@/components/AllTests";
import { Container, Pagination, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import CustomPagination from "@/components/commond/CustomPagination";
import { themesInterface } from "../../../../types/TypeInterfaces";
import { api } from "@/app/api/lib/api";
import TestsError from "../TestsError";

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
async function fetchThemes(page: string) {
  const request = await api<fetchThemesInterface>({
    method: 'get',
    url: `/quizzes?page=${page}`,
  })

  if (request?.status == 200) {
    return request.data
  }
  return { detail: "Ma'lumotlarni yuklashning imkoni bo'lmadi" }
}

export default async function Tests({ params }: { params: { page: string } }) {
  const subjects = await fetchSubjects()
  const themes = await fetchThemes(params.page)

  return (
    <Container maxWidth="xl" sx={{ ml: 0 }}>
      {
        subjects.detail ? <TestsError error={subjects.detail} /> : <SubjectsSlider subjects={subjects} params={undefined} />
      }
      {
        themes.detail ? <TestsError error={themes?.detail} /> : <AllTests themes={themes?.results} />
      }
      <Stack direction={'row'} justifyContent={'flex-end'} sx={{mt: 2}}>
        <CustomPagination count={themes.count as number} page={params.page} pathname='/tests' />
      </Stack>
    </Container>
  );
}
