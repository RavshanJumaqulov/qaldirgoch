import AppSlider from "@/components/AppSlider";
import { Box, Container } from "@mui/material";
import React from "react";
import TopSubjects from "@/components/TopSubjects";
import TopUsers from "@/components/TopUsers";

export default async function App() {
  
  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Container maxWidth="xl" sx={{ ml: 0 }}>
        <AppSlider />
        <TopSubjects />
        <TopUsers />
      </Container>
    </Box>
  );
}

