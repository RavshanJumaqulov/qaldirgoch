"use client";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';
import useVisiblity from "@/hooks/useVisiblity";
import { Subject } from "../../types/TypeInterfaces";

export default function SubjectsSlider({
  params,
  subjects
}: {
  params: string | undefined;
  subjects: Subject[]
}) {
  const uploadClient = useVisiblity(true)

  return (
    <Box
      sx={{
        width: "100%",
        mb: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
        "& .swiper": {
          width: "100%",
          height: "100%",
        },
        "& .swiper-slide": {
          textAlign: "center",
          fontSize: 18,
          display: "inline-block",
          width: "auto",
          px: 2,
          py: 1,
          borderRadius: 4,
          border: "1px solid #fff",
          transition: "0.3s all",
          "&:hover": {
            color: "#fff",
          },
          "&:nth-child(1)": {
            background: params == undefined ? "#fff" : "",
            color: params == undefined ? "#00000099" : "",
          },
        },
        "& .swiper-pagination": {
          display: "none",
        },
      }}
    >
      {/* <Box
        sx={{
          width: 30,
          height: "100%",
          zIndex: 2,
          position: "absolute",
          right: 0,
          boxShadow: "-10px 0px 10px #00000 inset",
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, #121212 100%)",
        }}
      /> */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          Hammasi
          <Box
            component={Link}
            href={`/tests/`}
            sx={{
              width: "100%",
              minHeight: "100%",
              position: "absolute",
              zIndex: 0,
              borderRadius: 3,
              top: 0,
              left: 0,
            }}
          ></Box>
        </SwiperSlide>
        {uploadClient.visiblity ? subjects.map((el: Subject) => {
          return (
            <SwiperSlide
              key={el.id}
              style={{
                color: params == el.name ? "#00000099" : "",
                background: params == el.name ? "#fff" : "",
              }}
            >
              {el.name}
              <Box
                component={Link}
                href={`/tests/subject/${el.name}`}
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  position: "absolute",
                  zIndex: 0,
                  borderRadius: 3,
                  top: 0,
                  left: 0,
                }}
              ></Box>
            </SwiperSlide>
          )
        }) : (
          <SwiperSlide style={{ border: "none", height: 10 }}>
            <CircularProgress size="2rem" />
          </SwiperSlide>
        )
        }
      </Swiper>
    </Box>
  );
}
