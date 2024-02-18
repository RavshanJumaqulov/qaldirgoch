import axios, { AxiosResponse } from "axios";
import { api } from "./lib/api";

const Auth = async (
  number: string
): Promise<AxiosResponse<any> | undefined> => {
  try {
    const data = await axios({
      url: "https://tutorapi.nisbot.uz/api/reg/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { username: number },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
export { Auth };
