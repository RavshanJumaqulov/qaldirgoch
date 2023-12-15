import AllTests from "@/components/AllTests";
import SubjectsSlider from "@/components/SubjectsSlider";
import { Box, Container } from "@mui/material";
import React from "react";

interface paramsInterface {
  page: string;
}

export default function layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: paramsInterface;
}) {
  console.log(params);

  return (
    <Box sx={{ maxWidth: "100vw", minHeight: "100vh", overflow: "hidden" }}>
      <Box sx={{ width: "100%", mt: 10 }}>
        <Container maxWidth="xl" sx={{ ml: 0 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
