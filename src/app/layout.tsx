import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import NextTopLoader from "nextjs-toploader";
import ContextProvider from "@/context/Context";


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
            maxWidth: '100%',
            position: 'absolute',
          }}>
            <NextTopLoader />
          </Box>
          <ThemeRegistry>
            <ContextProvider>
              <Box sx={{ minWidth: "100%", maxWidth: '100%', overflowX: 'hidden', }}>{children}</Box>
            </ContextProvider>
          </ThemeRegistry>
        </Box>
      </body>
    </html>
  );
}
