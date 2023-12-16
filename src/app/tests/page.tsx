import SubjectsSlider from "@/components/SubjectsSlider";
import { Box, Container } from "@mui/material";
import React from "react";
import AllTests from "@/components/AllTests";
import { api } from "../api/lib/api";
import TestsError from "./TestsError";
import { Subject } from "../../../types/TypeInterfaces";

const fetchSubjects = async () => {
  const subject = await api({
    method: 'get',
    url: '/fanlar',
  })
  if(subject.status == 200){
    return subject.data
  }
  return {detail: "Ma'lumotlarni yuklashning imkoni bo'lmadi"}
}
const fetchThemes = async () => {
  const request = await api({
    method: 'get',
    url: '/quizzes',
  })
  if(request.status == 200){
    return request.data
  }
  return {detail: "Ma'lumotlarni yuklashning imkoni bo'lmadi"}
}
export default async function Tests() {
  const subjects = await fetchSubjects()
  const themes = await fetchThemes()  
  return (
    <Container maxWidth="xl" sx={{ ml: 0 }}>
      {
        subjects.detail ? <TestsError error={subjects.detail} /> : <SubjectsSlider subjects={subjects} params={undefined} />
      }
      {
        themes.detail ? <TestsError error={themes.detail} /> : <AllTests themes={themes} />
      }

    </Container>
  );
}
