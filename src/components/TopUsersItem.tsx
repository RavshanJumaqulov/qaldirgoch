import { Box, Typography } from "@mui/material";
import React from "react";

export default function TopUsersItem({name, subject, img}:{name:string, subject: string, img: string}) {
  return (
    <Box
      sx={{
        justifySelf: "stretch",
        p: { xs: 3, md: 4 },
        borderRadius: 10,
        textAlign: "left",
        border: {
          xs: "1px solid hsla(0,0%,100%,.1)",
          md: "2px solid hsla(0,0%,100%,.1)",
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mr: {xs: 1, sm: 2, md: 3}
      }}
    >
      <Box
        component={"img"}
        src={img}
        sx={{
          width: 60,
          height: 60,
          border: {
            xs: "1px solid hsla(0,0%,100%,.1)",
            md: "2px solid hsla(0,0%,100%,.1)",
          },
          borderRadius: "40%",
          objectFit: "cover",
          mr: 2,
        }}
      />
      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box !important",
            WebkitLineClamp: "1 !important",
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box !important",
            WebkitLineClamp: "1 !important",
            WebkitBoxOrient: "vertical",
          }}
        >
          {subject}
        </Typography>
      </Box>
    </Box>
  );
}
