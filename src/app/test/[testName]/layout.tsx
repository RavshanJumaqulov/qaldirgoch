import AppBar from "@/components/AppBar";
import { Box, Stack } from "@mui/material";
import React from "react";

export const metadata = {
  title: "Testlar | QIZIL QALDIRG'OCH",
  description: "Abiturientlar uchun test sinovlari",
};



export default function layout({ children }: { children: React.ReactNode }) {

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: '100vh',
        height: "auto",
        overflowY: 'auto'
      }}
    >
      <AppBar />
      <Stack
        direction={"row"}
        sx={{
          width: { xs: "100%", sm: "calc(100% - 80px)" },
          ml: { sm: 10 },
          px: { xs: 1, sm: 2 },
          py: { sx: 1, sm: 2 },
          textAlign: "left",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            left: 0,
            backgroundImage:
              "url(https://remini.ai/images/blurs/section=businesses.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            position: "fixed",
            zIndex: -1,
          }}
        />
        {children}
      </Stack>
    </Box>
  );
}
