import AppBar from "@/components/AppBar";
import { Box, Stack } from "@mui/material";
import React from "react";

export const metadata = {
  title: "Testlar | QIZIL QALDIRG'OCH",
  description: "Abiturientlar uchun test sinovlari",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {children}
    </Box>
  );
}
