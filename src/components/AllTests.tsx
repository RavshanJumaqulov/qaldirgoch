"use client";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import TestsItem from "./TestsItem";
import { themeInterface, themesInterface } from "../../types/TypeInterfaces";
import { complatedHeader, testHeader } from "@/app/data/ColsHeader";


export default function AllTests({ themes }: { themes: themesInterface[] }) {

  return (
    <Box sx={{ width: "100%", }}>
      <Box
        sx={{
          display: "grid",
          width: '100%',
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: 1, sm: 2 },
        }}
      >
        {themes.map((el: themesInterface) => {
          return (
            <TestsItem
              key={el.id}
              item={el}
              header={testHeader}
            />
          );
        })
        }
      </Box>
    </Box>
  );
}
