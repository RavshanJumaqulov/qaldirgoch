import { Box, Typography } from "@mui/material";
import React from "react";
import TestCategoryItem from "./TestCategoryItem";

export default function TopSubjects() {
  return (
    <Box sx={{ width: "100%", mb: {xs: 6, md: 8} }}>
      <Typography
        variant={"subtitle1"}
        sx={{
          fontSize: { xs: 20, sm: 24, md: 32, lg: 40 },
          my: 2,
          textAlign: "left",
        }}
      >
        Top testlar
      </Typography>
      <Box
        sx={{
          gap: { sx: 1, sm: 2, md: 3 },
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        <TestCategoryItem
          img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
          title="XV asr boshida Movarounnahr"
          des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
        />
        <TestCategoryItem
          img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
          title="XV asr boshida Xuroson"
          des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
        />
        <TestCategoryItem
          img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
          title="XV asr boshida Movarounnahr"
          des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
        />
        <TestCategoryItem
          img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
          title="XV asr boshida Movarounnahr"
          des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
        />
        <TestCategoryItem
          img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
          title="XV asr boshida Movarounnahr"
          des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
        />
        <TestCategoryItem
          img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
          title="XV asr boshida Movarounnahr"
          des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
        />
      </Box>
    </Box>
  );
}
