import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import NextTopLoader from "nextjs-toploader";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Box sx={{
          '& ::-webkit-scrollbar': {
            width: 3,
          },

          '& ::-webkit-scrollbar-track': {
            background: 'hsla(0,0%,100%,.1)'
          },

          '& ::-webkit-scrollbar-thumb': {
            background: '#ff7434'
          },

          '& ::-webkit-scrollbar-thumb:hover': {
            background: 'red'
          },
        }}>
          <Box sx={{
            width: "100%",
            maxWidth: '100vw',
            zIndex: 999999999,
          }}>
            <NextTopLoader />
          </Box>
          <ThemeRegistry>
            <Box sx={{ minWidth: "100vw", maxWidth: '100vw', overflowX: 'hidden', }}>{children}</Box>
          </ThemeRegistry>
        </Box>
      </body>
    </html>
  );
}
