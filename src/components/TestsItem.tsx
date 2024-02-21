import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TestsItemLike from "./TestsItemLike";
import Link from "next/link";
import { ColsHeaderInterface, themesInterface } from "../../types/TypeInterfaces";



export default function TestsItem({ item, header }: { item: any, header: ColsHeaderInterface }) {
  return (
    <Box sx={{ height: "100% !important", textDecoration: 'none' }} component={header.link ? Link : 'div'} href={`/test/${header.link && header.link(item)}`} >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid hsla(0,0%,100%,.6)",
          p: 1,
          px: 2,
          borderRadius: 6,
          transition: "0.3s all",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          "&:hover": {
            border: "1px solid #FF5C00 !important",
            "& .MuiStack-root": {
              background: "#FF5C00",
            },
          },
        }}
      >
        <Stack
          sx={{
            width: 5,
            height: "70%",
            position: "absolute",
            left: 0,
            top: 'calc(20px)',
            background: "#fff",
            borderRadius: 3,
            transition: '0.3s all'
          }}
        />
        <Typography
          variant="subtitle2"
          title="Natural va butun sonlar hisobga oid masalalar"
          sx={{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box !important",
            WebkitLineClamp: "2 !important",
            WebkitBoxOrient: "vertical",
            transition: "0.3s all",
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          {header.title(item)}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              title="Natural va butun sonlar hisobga oid masalalar"
              sx={{
                mt: 2,
                textAlign: "left",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box !important",
                WebkitLineClamp: "1 !important",
                WebkitBoxOrient: "vertical",
                transition: "0.3s all",
              }}
            >
              {header.questionCount(item)}
            </Typography>
            <Typography
              variant="body2"
              title="Natural va butun sonlar hisobga oid masalalar"
              sx={{
                mt: 2,
                textAlign: "left",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box !important",
                WebkitLineClamp: "1 !important",
                WebkitBoxOrient: "vertical",
                transition: "0.3s all",
                "&:hover": {
                },
              }}
            >
              {header.fanlar && header.fanlar(item)}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              title="Natural va butun sonlar hisobga oid masalalar"
              sx={{
                mt: 1,
                textAlign: "left",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box !important",
                WebkitLineClamp: "1 !important",
                WebkitBoxOrient: "vertical",
                background: "#FF5C00",
                px: 1,
                py: 0.5,
                borderRadius: 3,
                transition: "0.3s all",
                fontSize: 14,
                color: "#fff",
                textDecoration: 'none !important',
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {header.fanlar && header.fanlar(item)}
            </Typography>
            <TestsItemLike />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
