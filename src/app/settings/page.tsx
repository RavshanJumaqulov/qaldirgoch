import { Avatar, Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Forms from "./Forms";
import { api } from "../api/lib/api";
import { UserInterface } from "../../../types/TypeInterfaces";
import CustomAvatarInput from "@/components/commond/CustomAvatarInput";

const getUser = async () => {
  const request = await api<UserInterface>({
    method: 'get',
    url: '/user'
  })
  if (request?.status == 200) {
    return request.data
  }
}

export default async function Settings() {
  const user = await getUser()
  console.log(user);

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Container maxWidth="xl" sx={{ ml: 0 }}>
        <Grid2
          container
          spacing={{ xs: 1, md: 2 }}
          sx={{
            borderRadius: 6,
            background: "hsla(0,0%,100%,.05)",
            py: 5,
            mt: { xs: 2, md: 4 },
            px: { xs: 1, md: 2 }
          }}
        >
          <Grid2 xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

              }}
            >
              <CustomAvatarInput />
              <Avatar
                alt="Ravshan Jumaqulov"
                src="/smile4.png"
                sx={{
                  width: 200,
                  height: 200,
                  border: "1px solid",
                  borderColor: "secondary.main",
                  mb: 2,
                  zIndex: -1000,
                  position: 'static !important',
                  '& img': {
                    position: 'relative !important',
                    zIndex: -1
                  }
                }}
              />
              <Typography variant="body1" sx={{ color: "#fff" }}>
                {(user?.first_name == '' && user?.last_name) == '' ?
                  'Foydalanuvchi' :
                  user?.first_name == '' ?
                    user?.last_name : user?.first_name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", textTransform: 'lowercase' }}>
                {user?.types}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Forms user={user} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
