import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      first_name:string;
      last_name:string;
      image: string | null;
      picture:string;
      types: string;
      region: string;
      password: string;
      refresh_token: string;
      access_token: string;
      exp: number;
      iat: number;
      jti: string
    } & DefaultSession['user']
  }
}

declare module "next-auth" {
  interface Token {
    user: {
      username: string;
      first_name:string;
      last_name:string;
      image: string | null;
      picture:string;
      types: string;
      region: string;
      password: string;
      refresh_token: string;
      access_token: string;
      exp: number;
      iat: number;
      jti: string
    } & DefaultSession['user']
  }
}
