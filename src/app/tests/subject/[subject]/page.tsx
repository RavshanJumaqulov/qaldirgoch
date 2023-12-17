import { api } from "@/app/api/lib/api";
import AllTests from "@/components/AllTests";
import SubjectsSlider from "@/components/SubjectsSlider";
import { Box, Container } from "@mui/material";
import React from "react";

const subjects = async () => {
  const subject = await api({
    method: 'get',
    url: `/fanlar`,
  })
  return subject.data
}

const fetchThemes = async (subject: string) => {
  const request = await api({
    method: 'get',
    url: `/quizzes/?fanlar__name=${subject}`,
  })
  return request.data
}

export default async function Subject({
  params,
}: {
  params: { subject: string };
}) {
  
  const data = await subjects()
  const themes = await fetchThemes(params.subject)
  console.log(themes);
  return (
    <Box sx={{ maxWidth: "100vw", minHeight: "100vh", overflow: "hidden" }}>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ ml: 0 }}>
          <SubjectsSlider subjects={data} params={params.subject} />
          <AllTests themes={themes} />
        </Container>
      </Box>
    </Box>
  );
}
