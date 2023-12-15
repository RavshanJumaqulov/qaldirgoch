import { Box } from '@mui/material'
import React from 'react'

export const metadata = {
  title: "Login | QIZIL QALDIRG'OCH",
  description: "Abiturientlar uchun test sinovlari",
};

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <Box>{children}</Box>
  )
}
