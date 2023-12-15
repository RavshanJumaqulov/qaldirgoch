"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import AppSlideItem from "./AppSlideItem";

export default function AppSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
  };
  
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Box sx={{ width: "100%", mb: {xs: 6, md: 8} }}>
        <Typography
          variant={"subtitle1"}
          sx={{
            fontSize: { xs: 20, sm: 24, md: 32, lg: 40 },
            my: 2,
            textAlign: "left",
          }}
        >
          Top fanlar
        </Typography>
        <Slider {...settings}>
          <AppSlideItem />
          <AppSlideItem />
        </Slider>
      </Box>
    </>
  );
}
