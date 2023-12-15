import { StarMedalIcon } from "@/app/SvgIcons/Icons";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function AppSlideItem() {
  return (
    <Box
      sx={{
        border: "2px solid hsla(0,0%,100%,.1)",
        borderRadius: 10,
        py: 2.5,
        px: 2.5,
        maxWidth: '100vw'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: {xs: "flex-start", md:"center"},
        }}
      >
        <Box sx={{ px: {xs: 1, sm: 2, md: 3, lg: 5}, display: {xs: 'none', md: "flex"}, }}>
          <StarMedalIcon sx={{ fontSize: 48 }} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: { xs: 20, sm: 24, md: 32, lg: 40 },
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box !important",
                WebkitLineClamp: { xs: "2 !important", md: "1 !important" },
                WebkitBoxOrient: "vertical",
                mb: 2,
              }}
            >
              Matematika asoslari
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
              voluptatibus consequatur iure rem, dolor voluptatem, eos odit
              modi, unde repudiandae excepturi vero culpa numquam officia rerum
              fugit ex corporis.
            </Typography>
          </Box>
          <Box
            component={"img"}
            src="https://images.prismic.io/remini-marketing-website/57767b6b-cf91-45f0-be01-fe04e7638abe_step-1-64cd33e16807b.webp?auto=compress%2Cformat&fit=max&w=760"
            sx={{ maxWidth: {xs: '100%', sm: '300px !important', md: "15rem", lg: "20rem", position: 'static !important' }, maxHeight: {xs: 150, sm: 200, md: 250}, objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
