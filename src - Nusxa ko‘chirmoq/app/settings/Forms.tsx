"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface Inputs {
  first_name: string;
  last_name: string;
  region: string;
  image: string | null;
  poll: string;
}

const first_name = { name: "first_name" };
const last_name = { name: "last_name" };
const region = { name: "first_name" };
const image = { name: "image" };

export default function Forms(props: Inputs) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [regionState, setRegionState] = React.useState<string>("");
  const [pollState, setPollState] = React.useState<string>("")

  const handleRegion = (event: SelectChangeEvent) => {
    setRegionState(event.target.value as string);
  };
  const handlePoll = (event: SelectChangeEvent) => {
    setPollState(event.target.value as string);
  };

  useEffect(() => {
    setRegionState(props.region);
    setPollState(props.poll)
  }, []);
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        "& input": {
          mt: 2,
          py: 2,
          px: 1,
          width: "100%",
          background: "none",
          border: "1px solid #FF5C00",
          borderRadius: 3,
          color: "#fff !important",
          outline: "none",
          transition: "0.3s all",
          fontSize: 16,
          fontWeight: 600,
          "&:hover": {
            borderColor: "#FF5C00",
            color: "#FF5C00",
          },
          "&:focus": {
            outline: "none",
            boxShadow: "0px 0px 5px #FF5C00",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "#FF5C00",
          },
          "&:autofill": {
            background: "none !important",
            color: "#FF5C00",
          },
          "&:-webkit-autofill": {
            "&:hover": {
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "#FF5C00",
              transition: "all 5000s ease-in-out 0s",
            },
            "&:focus": {
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "#FF5C00",
              WebkitBoxShadow: "0px 0px 5px #FF5C00",
              boxShadow: "0px 0px 5px #FF5C00",
              transition: "all 5000s ease-in-out 0s",
            },
            "&:active": {
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "#FF5C00",
              transition: "all 5000s ease-in-out 0s",
            },
            background: "none !important",
          },
          "&:-internal-autofill-selected": {
            background: "none !important",
            backgroundColor: "none",
          },
        },

        "& .MuiInputBase-root": {
          borderRadius: 3,
          fontSize: 16,
          fontWeight: 600,
          "& fieldset": {
            border: "1px solid #FF5C00",
          },
          "&:hover": {
            "& fieldset": {
              borderColor: "#FF5C00 !important",
            },
          },
          "& .MuiSelect-select": {
            py: 2,
            px: 1,
            textAlign: "left",
          },

          "& .MuiSelect-root": {
            "&:hover": {
              "& fieldset": {
                borderColor: "#FF5C00 !important",
              },
            },
          },
          "&.Mui-focused": {
            color: "#FF5C00",
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
              borderColor: "#FF5C00 !important",
              boxShadow: "0px 0px 5px #FF5C00",
            },
          },
        },
      }}
    >
      <Grid2 container spacing={{ xs: 1, sm: 2, md: 1, lg: 2 }}>
        <Grid2 xs={12} sm={6}>
          <input
            type="text"
            {...first_name}
            defaultValue={props.first_name}
            placeholder="Ismingizni kiriting"
            {...register("first_name")}
          />
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <input
            type="text"
            {...region}
            defaultValue={props.last_name}
            placeholder="Viloyatingizni kiriting"
            {...register("region")}
          />
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ fontSize: 16, fontWeight: "600" }}
            >
              Viloyat
            </InputLabel>
            <Select value={regionState} label="Viloyat" onChange={handleRegion}>
              <MenuItem value={"Andijon"} sx={{ fontSize: 16 }}>
                Andijon
              </MenuItem>
              <MenuItem value={"Buxoro"} sx={{ fontSize: 16 }}>
                Buxoro
              </MenuItem>
              <MenuItem value={"Farg'ona"} sx={{ fontSize: 16 }}>
                Farg`ona
              </MenuItem>
              <MenuItem value={"Jizzax"} sx={{ fontSize: 16 }}>
                Jizzax
              </MenuItem>
              <MenuItem value={"Namangan"} sx={{ fontSize: 16 }}>
                Namangan
              </MenuItem>
              <MenuItem value={"Navoiy"} sx={{ fontSize: 16 }}>
                Navoiy
              </MenuItem>
              <MenuItem value={"Qashqadaryo"} sx={{ fontSize: 16 }}>
                Qashqadaryo
              </MenuItem>
              <MenuItem value={"Samarqand"} sx={{ fontSize: 16 }}>
                Samarqand
              </MenuItem>
              <MenuItem value={"Sirdaryo"} sx={{ fontSize: 16 }}>
                Sirdaryo
              </MenuItem>
              <MenuItem value={"Surxandaryo"} sx={{ fontSize: 16 }}>
                Surxandaryo
              </MenuItem>
              <MenuItem value={"Toshkent"} sx={{ fontSize: 16 }}>
                Toshkent
              </MenuItem>
              <MenuItem value={"Toshkent shahri"} sx={{ fontSize: 16 }}>
                Toshkent shahri
              </MenuItem>
              <MenuItem value={"Xorazm"} sx={{ fontSize: 16 }}>
                Xorazm
              </MenuItem>
              <MenuItem value={"Qoraqalpog'iston respublikasi"} sx={{ fontSize: 16 }}>
                Qoraqalpog`iston respublikasi
              </MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ fontSize: 16, fontWeight: "600" }}
            >
              Jinsi
            </InputLabel>
            <Select value={pollState} label="Jinsi" onChange={handlePoll}>
              <MenuItem value={'Erkak'} sx={{ fontSize: 16 }}>
                Erkak
              </MenuItem>
              <MenuItem value={'Ayol'} sx={{ fontSize: 16 }}>
                Ayol
              </MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
}
