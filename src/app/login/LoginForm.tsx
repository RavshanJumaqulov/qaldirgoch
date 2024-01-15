"use client";
import { Auth } from "../api/Auth";
import useVisiblity from "@/hooks/useVisiblity";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { InputMask } from "@react-input/mask";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  telefon: string;
  code: string;
};

const nameAttr = { name: "code" };

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const sendSMS = useVisiblity();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!sendSMS.visiblity) {
      setLoading(true);
      const res: AxiosResponse<any, any> | undefined = await Auth(
        data.telefon.replaceAll(" ", "").slice(1)
      );
      sendSMS.show();
      if (res?.status == 200) {
      }
      setLoading(false);
      return res;
    } else if (sendSMS.visiblity) {
      const request = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      })
      console.log(request);
      const resJson = await request.json();
      if(resJson.access_token){
        router.push('/app',{scroll: false})
      }
      return resJson
    }
  };
  return (
    <Box
      component={"form"}
      sx={{
        width: "100%",
        transition: "0.3s all",
        WebkitTransition: "0.3s all",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
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
        }}
      >
        {!sendSMS.visiblity && (
          <InputMask
            mask="+998 __ ___ __ __"
            replacement={{ _: /\d/ }}
            placeholder="+998"
            defaultValue="+998 "
            {...register("telefon", {
              required: {
                value: true,
                message: "Siz raqam kiritmadingiz.",
              },
              minLength: {
                value: 17,
                message: "Siz raqamni xato kiritdingiz.",
              },
            })}
          />
        )}
        {errors.telefon && (
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {errors.telefon.message}
          </Typography>
        )}
        {sendSMS.visiblity && (
          <input
            // mask="_ _ _ _ _"
            // replacement={{ _: /\d/ }}
            placeholder="Kodni kiriting"
            defaultValue=""
            {...nameAttr}
            {...register("code", {
              required: {
                value: true,
                message: "Siz kodni kiritmadingiz.",
              },
              minLength: {
                value: 6,
                message: "Siz kodni xato kiritdingiz.",
              },
            })}
          />
        )}
        {errors.code && (
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {errors.code.message}
          </Typography>
        )}
      </Box>
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        disableElevation
        loading={loading}
        sx={{
          mt: 2,
          width: "100%",
          borderRadius: 3,
          background: "#FF5C00",
          py: 2,
          color: "#fff",
          "&:hover": {
            background: "#f45700",
          },
        }}
      >
        Yuborish
      </LoadingButton>
    </Box>
  );
}
