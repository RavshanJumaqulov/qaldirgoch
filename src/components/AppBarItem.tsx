"use client";
import useVisiblity from "@/hooks/useVisiblity";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AppBarItem({
  icon,
  path,
  name,
  show,
}: {
  icon: React.ReactNode;
  path: string;
  name: string;
  show: boolean;
}) {
  const router = useRouter();
  const currntPage = usePathname();
  const load = useVisiblity(true);

  return (
    <Stack
      component={Link}
      href={path}
      direction={"row"}
      sx={{
        textDecoration: 'none',
        userSelect: 'none',
        mt: 1,
        "&:hover": {
          "& .MuiBox-root": {
            filter: "blur(100px)",
            background: "#FF5C00",
            opacity: 1,
          },
          "& .MuiSvgIcon-root": {
            color: "#FF5C00",
          },
          "& .MuiTypography-root": {
            color: "#FF5C00",
          },
        },
      }}
    >
      <Stack
        sx={{
          width: 64,
          minWidth: 64,
          height: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            width: 64,
            minWidth: 64,
            height: "100%",
            borderLeft:
              path == currntPage
                ? "3px solid #FF5C00 !important"
                : "3px solid transparent !important",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Stack>
        <Stack
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: 20,
            transition: "0.3s all",
            width: { xs: "200px", sm: 0, md: show ? 0 : 200 },
            minWidth: { xs: "200px", sm: 0, md: show ? 0 : 200 },
            pl: { xs: 1, sm: 0, md: show ? 0 : 1 },
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {load.visiblity && (
            <Typography
              variant="body2"
              sx={{
                textTransform: "full-size-kana !important",
                color: path == currntPage ? "#fff" : "",
              }}
            >
              {name}
            </Typography>
          )}
        </Stack>
        <Box
          sx={{
            width: 36,
            height: 36,
            background: "#FF5C00",
            transition: "0.3s all",
            position: "absolute !important",
            zIndex: -1000,
            top: 0,
            opacity: 0,
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
