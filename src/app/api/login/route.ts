import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const response = await fetch('https://tutorapi.nisbot.uz/api/reg/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: body.data.code
        })
    });
    console.log(response);
    const resJson = await response.json();
    if (!!resJson.access_token) {
        cookies().set('accessToken', resJson.access_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        cookies().set('refreshToken', resJson.refresh_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        delete resJson.accessToken;
        delete resJson.refreshToken;
        return NextResponse.json({...resJson, success: true});
    }

    return NextResponse.json({
        success: false,
        message: 'Credential Error',
    })
}