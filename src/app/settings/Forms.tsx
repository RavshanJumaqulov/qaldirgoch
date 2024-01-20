"use client";
import CustomSelect from "@/components/commond/CustomSelect";
import CustomTextField from "@/components/commond/CustomTextField";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateProfileInterface, UserInterface } from "../../../types/TypeInterfaces";
import CustomButton from "@/components/commond/CustomButton";
import { api } from "../api/lib/api";
import { ContextType, MainContext } from "@/context/Context";

export interface SettingsForm {
  user: UserInterface | undefined
}

const pols: { id: number, label: string }[] = [
  {
    id: 1,
    label: 'Erkak'
  },
  {
    id: 2,
    label: 'Ayol'
  }
]

const regions: { id: number, label: string }[] = [
  {
    id: 1,
    label: 'Toshkent shahri'
  },
  {
    id: 2,
    label: 'Andijon',
  },
  {
    id: 3,
    label: 'Buxoro'
  },
  {
    id: 4,
    label: 'Farg\'ona'
  },
  {
    id: 5,
    label: 'Jizzax'
  },
  {
    id: 6,
    label: 'Namangan'
  },
  {
    id: 7,
    label: 'Navoiy'
  },
  {
    id: 8,
    label: 'Qashqadaryo'
  },
  {
    id: 9,
    label: 'Qoraqalpag\'iston'
  },
  {
    id: 10,
    label: 'Samarqand'
  },
  {
    id: 11,
    label: 'Sirdaryo'
  },
  {
    id: 12,
    label: 'Surxandaryo'
  },
  {
    id: 13,
    label: 'Toshkent viloyati'
  },
  {
    id: 14,
    label: 'Xorazm'
  }
]



export default function Forms(props: SettingsForm) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UpdateProfileInterface>({
    defaultValues: {
      first_name: props.user?.first_name,
      last_name: props.user?.last_name,
      jinsi: props.user?.jinsi,
      viloyat: props.user?.viloyat
    }
  });

  const {
    actions: { openSnackbar },
  } = useContext<ContextType>(MainContext)

  const onSubmit: SubmitHandler<UpdateProfileInterface> = async (data) => {
    const request = await fetch('/api/updateProfile/', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const response = await request.json()
    if (request.status == 200) {
      openSnackbar({ message: `Profil tahrirlandi!`, status: 'success' })
    }
    else {
      openSnackbar({ message: `${response.detail} ${request.status}`, status: 'error' })
    }
  };
  return (
    <Box
      component={"form"}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid2 container spacing={{ xs: 1, sm: 2, md: 1, lg: 2 }}>
        <Grid2 xs={12} sm={6}>
          <CustomTextField
            control={control}
            name="first_name"
            required={true}
            minLength={3}
            label="Ism" />
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <CustomTextField
            control={control}
            name="last_name"
            required={true}
            minLength={3}
            label="Familiya" />
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <CustomSelect
            label="Viloyati"
            name="viloyat"
            control={control}
            options={regions}
            required={true}
          />
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <CustomSelect
            label="Jinsi"
            name="jinsi"
            control={control}
            options={pols}
            required={true}
          />
        </Grid2>
      </Grid2>
      <Stack direction={'row'} justifyContent={'flex-end'} >
        <CustomButton type='submit' title="Saqlash" sx={{}} />
      </Stack>
    </Box>
  );
}
