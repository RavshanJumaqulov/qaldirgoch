import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LoginLayout from "./layout";
import LoginForm from "./LoginForm";
import Image from "next/image";


export default function page() {
  
  return (
    <LoginLayout>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: -10,
            backgroundImage:
              "url(https://remini.ai/images/lines/section=reviews.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        ></Box>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            maxHeight: "100%",
            position: "absolute",
            zIndex: -9,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "centere",
            backgroundImage: {
              xs: "url(https://remini.ai/images/lines/section=platform.webp)",
              md: "url(https://remini.ai/images/blurs/section=features.webp)",
            },
            backgroundPosition: { xs: "50%", md: "100%" },
            backgroundSize: { xs: "cover", md: "contain" },
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            overflow: "hidden",
            position: "relative",
            height: "100vh",
            "& img": {
              minWidth: "250px",
              height: "auto",
              maxHeight: "90vh",
              opacity: 0.7,
              position: { xs: "absolute", md: "static" },
              xIndex: -8,
              top: 0,
            },
          }}
        >
          <Box component='img' src="/login-animate.svg" alt="" />
          <Box
            sx={{
              width: "100%",
              minWidth: "250px",
              maxWidth: "450px",
              borderRadius: 3,
              background: "#ffffff3f",
              backdropFilter: "blur(10px)",
              py: 5,
              px: 2,
              boxShadow: "0px 0px 5px #FF5C00",
              position: "relative",
            }}
          >
            <Box
              component={"img"}
              src="/swallow.svg"
              sx={{
                position: "absolute !important",
                maxHeight: "200px !important",
                zIndex: -1,
                top: "15px !important",
                opacity: "0.2 !important",
              }}
            />
            <Typography sx={{ textAlign: "center" }} variant="subtitle1">
              Kirish
            </Typography>
            <LoginForm />
          </Box>
        </Container>
      </Box>
    </LoginLayout>
  );
}
