"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import TopUsersItem from "./TopUsersItem";
import Slider from "react-slick";
import Head from "next/head";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function TopUsers() {
  return (
    <>
      <Head>
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
      </Head>
      <Box sx={{ width: "100%", mb: { xs: 6, md: 8 } }}>
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
        <Slider {...settings}>
          <TopUsersItem
            name="Barno Yusupova"
            subject="Tarix"
            img="/smile3.png"
          />
          <TopUsersItem
            name="Boburbek Boyxonov"
            subject="Matematika"
            img="/smile4.png"
          />
          <TopUsersItem
            name="Xonzoda Hakimova"
            subject="Adabiyot"
            img="/smile5.png"
          />
          <TopUsersItem
            name="Gulinur Azizova"
            subject="Ingliz tili"
            img="/smile6.png"
          />
        </Slider>
        {/* <Box
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
          <TopUsersItem
            name="Barno Yusupova"
            subject="Matematika"
            img="/smile2.png"
          />
        </Box> */}
      </Box>
    </>
  );
}
