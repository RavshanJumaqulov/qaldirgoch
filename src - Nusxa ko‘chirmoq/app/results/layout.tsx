import AppBar from "@/components/AppBar";
import { Box, Stack } from "@mui/material";
import React from "react";

export const metadata = {
    title: "Natijalarim | Qizil qaldirg'och",
    description: "Abiturientlar uchun test sinovlari",
    generator: "Next.js",
    applicationName: "Qizil qaldirg'och",
    referrer: "origin-when-cross-origin",
    keywords: ["Abiturient", "Testlar", "DTM", "dtm", "test sinovlari"],
    authors: [
        { name: "Ravshan Jumaqulov" },
        { name: "Ravshan Jumaqulov", url: "https://t.me/ravshan_jumaqulov" },
    ],
    creator: "Ravshan Jumaqulov",
    publisher: "Ravshan Jumaqulov",
    url: "https://swallow.net",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        images: "/swallow.png",
    },
    images: [
        {
            url: "/swallow.png",
            width: 800,
            height: 600,
        },
        {
            url: "/swallow.png",
            width: 1800,
            height: 1600,
            alt: "My custom alt",
        },
    ],
    type: "website",
};

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
            }}
        >
            <AppBar />
            <Stack
                direction={"row"}
                sx={{
                    width: { xs: "100%", sm: "calc(100% - 64px)" },
                    ml: { sm: 8 },
                    px: { xs: 1, sm: 2 },
                    py: { sx: 1, sm: 2 },
                    textAlign: "left",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100vh",
                        left: 0,
                        backgroundImage:
                            "url(https://remini.ai/images/blurs/section=businesses.webp)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                        position: "fixed",
                        zIndex: -10
                    }}
                ></Box>
                {children}
            </Stack>
        </Box>
    );
}
