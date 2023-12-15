import { Avatar, Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Forms from "./Forms";

export default function Settings() {
  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Container maxWidth="xl" sx={{ ml: 0 }}>
        <Grid2
          container
          spacing={{ xs: 1, md: 2 }}
          sx={{
            borderRadius: 6,
            background: "hsla(0,0%,100%,.05)",
            py: 5,
            mt: { xs: 2, md: 4 },
            px: {xs: 1, md: 2}
          }}
        >
          <Grid2 xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Avatar
                alt="Ravshan Jumaqulov"
                src="/smile4.png"
                sx={{
                  width: 200,
                  height: 200,
                  border: "1px solid",
                  borderColor: "secondary.main",
                  mb: 2,
                  zIndex: -1000,
                  position: 'static !important',
                  '& img': {
                    position: 'relative !important',
                    zIndex: -1
                  }
                }}
              />
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Ravshan Jumaqulov
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Student
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Forms first_name='Ravshan' last_name='Jumaqulov' region='Navoiy' poll='erkak' image='/smile4.png' />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
