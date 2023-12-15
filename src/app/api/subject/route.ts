import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    // const body = await req.json();
    // console.log('......................................Cookie........................')
    // console.log(cookies().getAll());
    // const response = await axios({
    //     url: 'https://tutorapi.nisbot.uz/api/quizzes',
    //     method: 'get',
    //     headers: {
    //         Authorization: `Bearer ${body.cookies.get('accessToken')}`
    //     }
    // })
    // if( !!response.data){
    //     const resJson = await response.data
    //     return NextResponse.json({data: 'ddddddddddddd'},  {status: 200})
    // }
    // if (!!resJson.access_token) {
    //     cookies().set('accessToken', resJson.access_token, {
    //         httpOnly: true,
    //         maxAge: 24 * 60 * 60,
    //     });
    //     cookies().set('refreshToken', resJson.refresh_token, {
    //         httpOnly: true,
    //         maxAge: 24 * 60 * 60,
    //     });
    //     delete resJson.accessToken;
    //     delete resJson.refreshToken;
    //     return NextResponse.json({...resJson, success: true});
    // }

    return NextResponse.json({
        success: false,
        message: 'Credential Error',
    })
}