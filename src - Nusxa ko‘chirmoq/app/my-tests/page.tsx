import { Box, Container } from "@mui/material";
import React from "react";
import AllTests from "@/components/AllTests";
import { api } from "../api/lib/api";

const fetchThemes = async () => {
    const request = await api({
        method: 'get',
        url: '/quizzes',
    })
    return request.data
}
export default async function Tests() {
    const themes = await fetchThemes()
    return (
        <Box sx={{ width: '100%', maxWidth: "100vw", minHeight: "100vh", overflow: "hidden", }}>
            <Box sx={{ width: "100%", mt: 10, }}>
                <Container maxWidth="xl" sx={{ ml: 0 }}>
                    <AllTests themes={themes} />
                </Container>
            </Box>
        </Box>
    );
}
