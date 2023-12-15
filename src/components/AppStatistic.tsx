import { Box, Typography } from "@mui/material";
import React from "react";

export default function AppStatistic({status, des}: {status: string, des: string}) {
  return (
    <Box
      sx={{
        textAlign: { xs: "left", md: "center" },
        flex: "1 1 0%",
        py: 4,
        px: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: 120, md: 148 },
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: "-0.08em",
        }}
      >
        {status}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textTransform: "uppercase",
          lineHeight: { xs: 1.25, md: 1.65 },
          letterSpacing: "0.1em",
        }}
      >
        {des}
      </Typography>
    </Box>
  );
}
