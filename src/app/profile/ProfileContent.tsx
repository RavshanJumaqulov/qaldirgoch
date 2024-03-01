'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CompletedTest, UserInterface } from "../../../types/TypeInterfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import TestsItem from "@/components/TestsItem";
import { complatedHeader } from "../data/ColsHeader";
import CustomButton from "@/components/commond/CustomButton";
import Link from "next/link";
import { ContextType, MainContext } from "@/context/Context";

interface ComplatedTests {
    count: number
    next: null | string
    previous: null | string
    results: CompletedTest[]
}

export default function ProfileContent({ user, themes }: { user: UserInterface, themes: ComplatedTests }) {
    const { state } = useContext<ContextType>(MainContext)
    const boxRef = useRef<HTMLAnchorElement>(null)
    const [boxWidth, setBoxWidth] = useState<number>()
    const [page, setPage] = useState<string>('myTests')
    useEffect(() => {
        if (boxRef.current !== null) {
            const width: number = boxRef.current.getBoundingClientRect().width
            setBoxWidth(width)
        }
    }, [state.width])

    return (
        <Grid2 container spacing={{ xs: 1, sm: 2 }} sx={{ mt: 2, flexDirection: { xs: 'column-reverse', md: 'row' }, }}>
            <Grid2 xs={12} md={8} lg={8}>
                <Box
                    sx={{
                        width: "100%",
                        mb: { xs: 4, md: 6 },
                        position: "relative",
                        overflow: "hidden",
                        "& .swiper": {
                            width: "100%",
                            height: "100%",
                            whiteSpace: 'nowrap'
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
                        },
                        "& .swiper-pagination": {
                            display: "none",
                        },
                    }}
                >
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide
                            onClick={() => setPage('myTests')}
                            style={{
                                color: page == 'myTests' ? "#00000099" : "",
                                background: page == 'myTests' ? "#fff" : "",
                            }}>
                            Mening testlarim
                        </SwiperSlide>
                        <SwiperSlide
                            onClick={() => setPage('complate')}
                            style={{
                                color: page == 'complate' ? "#00000099" : "",
                                background: page == 'complate' ? "#fff" : "",
                            }}>
                            Tamomlangan testlar
                        </SwiperSlide>
                    </Swiper>
                </Box>
                <Box sx={{ width: "100%", }}>
                    <Box
                        sx={{
                            display: "grid",
                            width: '100%',
                            gridTemplateColumns: {
                                xs: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)",
                                // lg: "repeat(3, 1fr)",
                            },
                            gap: { xs: 1, sm: 2 },
                        }}
                    >
                        {themes.results.map((el: CompletedTest, index) => {
                            return (
                                <TestsItem
                                    key={index}
                                    item={el}
                                    header={complatedHeader}
                                />
                            );
                        })
                        }
                    </Box>
                </Box>
            </Grid2>
            <Grid2 xs={12} md={4} lg={4} sx={{ overflowX: 'hidden', mb: { xs: 5, md: 0 } }}>
                <Box ref={boxRef} sx={{ position: 'relative !important', maxWidth: '100%', top: 0 }}>
                    <Box sx={{ position: { xs: 'relative', md: 'fixed' }, width: boxWidth }} >
                        <Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    p: 2,
                                    backgroundColor: "hsla(0,0%,100%,.05)",
                                    borderRadius: "25px",
                                    mb: 2,
                                    userSelect: 'none',
                                    gap: 1,
                                    display: 'flex',
                                    flexDirection: { xs: "column", sm: 'row', lg: 'column' },
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: { xs: 'start', md: 'center' }
                                }}
                            >
                                <Box
                                    component={'img'}
                                    src={user.image ? user.image : '/smile4.png'}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        border: '1px solid hsla(0,0%,100%,.1)',
                                        borderRadius: 4,
                                        objectFit: 'cover'
                                    }} />
                                <Box>

                                    <Typography variant="subtitle2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'center' }, }}>
                                        {user.first_name == "" && user.last_name == "" ? "Foydalanuvchi" : `${user.first_name} ${user.last_name}`}
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'center' }, }}>
                                        +{user.username}
                                    </Typography>
                                </Box>
                                {
                                    (user.viloyat !== '' || user.jinsi !== '') && <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%', px: 2, mt: 2 }}>
                                        <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'center' }, }}>
                                            {user.jinsi}
                                        </Typography>
                                        <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'center' }, }}>
                                            {user.viloyat}
                                        </Typography>
                                    </Stack>
                                }

                                <Grid2 container spacing={2} sx={{ width: '100%', mt: 2 }} >
                                    <Grid2 xs={6}>
                                        <Typography variant="body2">
                                            Ishlangan:
                                        </Typography>
                                        <Box sx={{
                                            mt: 0.4,
                                            width: '100%',
                                            height: 50,
                                            borderRadius: 3,
                                            background: 'hsla(0,0%,100%,.1)'
                                        }}>
                                            <Typography variant="subtitle1">
                                                {user.count}
                                            </Typography>
                                        </Box>
                                    </Grid2>
                                    <Grid2 xs={6}>
                                        <Typography variant="body2">
                                            Ball:
                                        </Typography>
                                        <Box sx={{
                                            mt: 0.4,
                                            width: '100%',
                                            height: 50,
                                            borderRadius: 3,
                                            background: 'hsla(0,0%,100%,.1)'
                                        }}>
                                            <Typography variant="subtitle1">
                                                {user.score}
                                            </Typography>
                                        </Box>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Box>

                        <Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    p: 2,
                                    backgroundColor: "hsla(0,0%,100%,.05)",
                                    borderRadius: "25px",
                                    mb: 2,
                                    userSelect: 'none',
                                    gap: 1,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',

                                }}
                            >
                                <CustomButton
                                    title='Tahrirlash'
                                    component={Link}
                                    href="/settings"
                                    size="large"
                                    sx={{
                                        borderRadius: 3,
                                        width: '100%',
                                    }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}
