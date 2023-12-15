import { Box, Typography } from "@mui/material";
import React from "react";

export default function TestCategoryItem({
  img,
  title,
  des,
}: {
  img: string;
  title: string;
  des: string;
}) {
  return (
    <Box
      sx={{
        justifySelf: "stretch",
        p: { xs: 3, md: 4 },
        backgroundColor: "#000",
        borderRadius: 10,
        textAlign: "left",
        border: {
          xs: "1px solid hsla(0,0%,100%,.1)",
          md: "2px solid hsla(0,0%,100%,.1)",
        },
      }}
    >
      <Box
        component={"img"}
        loading="lazy"
        decoding="async"
        sx={{ width: 54, height: 54, borderRadius: "50%", mb: 2 }}
        src={img}
      />
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: 18, md: 22 },
          fontWeight: 500,
          letterSpacing: "-0.03em",
          "&:hover": { color: "#fff" },
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box !important",
          WebkitLineClamp: { xs: "1 !important", md: "2 !important" },
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "left",
          mt: 1.5,
          fontSize: { xs: 14, sm: 16 },
          letterSpacing: "-0.02em",
          color: "rgb(121, 121, 126)",
        }}
      >
        {des}
      </Typography>
    </Box>
  );
}
