import SubjectsSlider from "@/components/SubjectsSlider";
import { Box, Container } from "@mui/material";
import React from "react";
import AllTests from "@/components/AllTests";
import { api } from "../api/lib/api";

const fetchSubjects = async () => {
  const subject = await api({
    method: 'get',
    url: '/fanlar',
  })
  return subject.data
}
const fetchThemes = async () => {
  const request = await api({
    method: 'get',
    url: '/quizzes',
  })
  return request.data
}
export default async function Tests() {
  const data = await fetchSubjects()
  const themes = await fetchThemes()
  return (
    <Box sx={{ width: '100%', maxWidth: "100vw", minHeight: "100vh", overflow: "hidden", }}>
      <Box sx={{ width: "100%", mt: 10,  }}>
        <Container maxWidth="xl" sx={{ ml: 0 }}>
          <SubjectsSlider subjects={data} params={undefined} />
          <AllTests themes={themes} />
        </Container>
      </Box>
    </Box>
  );
}
