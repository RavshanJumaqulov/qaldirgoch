"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Container, IconButton } from "@mui/material";
import useVisiblity from "@/hooks/useVisiblity";
import { useRouter } from "next/navigation";
import { LinkIcon } from "@/app/SvgIcons/Icons";
import Link from "next/link";
import CustomButton from "./commond/CustomButton";

export default function HomeNavbar() {
  const menuIconVisiblity = useVisiblity();
  const router = useRouter();
  return (
    <AppBar position="sticky" sx={{ zIndex: 2000, boxShadow: "none" }}>
      <Toolbar
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "none",
          transition: "0.3s all",
          WebkitTransition: "0.3s all",
          py: 1
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: { xs: "100%", lg: "auto" },
              minHeight: 64,
            }}
          >
            <Box
              component={"img"}
              loading="lazy"
              decoding="async"
              src="/swallow.png"
              sx={{
                height: 64,
                mr: "2rem",
              }}
            />
            <IconButton
              onClick={menuIconVisiblity.toggle}
              sx={{ display: { lg: "none" } }}
            >
              {menuIconVisiblity.visiblity ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { lg: "space-between" },
              alignItems: "center",
              width: "100%",
              transition: "0.3s all",
              WebkitTransition: "0.3s all",
              height: {
                xs: menuIconVisiblity.visiblity ? "100vh" : "0px",
                lg: "auto",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Typography variant="subtitle2">Loyiha haqida</Typography>
              <Typography variant="subtitle2">Keng sohalar</Typography>
              <Typography variant="subtitle2">Resumelar</Typography>
              <Typography variant="subtitle2">Rekordlar</Typography>
              <Typography variant="subtitle2">Izohlar</Typography>
            </Box>
            <CustomButton
              component={Link}
              title="Hozir boshlash"
              href="/app"
              endIcon={<LinkIcon sx={{ fill: "#000" }} />}
              sx={{
                py: 2,
                px: 3,
                // mx: { sm: "auto" },
                borderRadius: 50,
                color: "#fff",
                backgroundColor: "hsla(0,0%,100%,.1)",
                border: "2px solid transparent",
                "&:hover": {
                  border: "2px solid hsla(0,0%,100%,.1) !important",
                  backgroundColor: "hsla(0,0%,100%,.1)",
                },
              }}
            />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
