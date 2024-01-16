import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    // if (!!req.cookies.get('refreshToken')?.value) {
    //     const response = await fetch('https://tutorapi.nisbot.uz/api/token/refresh/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             refresh: req.cookies.get('refreshToken')?.value
    //         })
    //     });
    //     const resJson = await response.json();
    //     console.log(resJson);

    //     if (!!resJson.access_token) {
    //         cookies().set('accessToken', resJson.access_token, {
    //             httpOnly: true,
    //             maxAge: 24 * 60 * 60 * 1000,
    //         });
    //         cookies().set('refreshToken', resJson.refresh_token, {
    //             httpOnly: true,
    //             maxAge: 24 * 60 * 60 * 1000,
    //         });
    //         delete resJson.accessToken;
    //         delete resJson.refreshToken;
    //     }
    // }
    const response = await fetch('https://tutorapi.nisbot.uz/api/save-answer/', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${req.cookies.get('accessToken')?.value}`
        },
        body: JSON.stringify(body)
    });
    const resJson = await response.json()
    if (resJson) {
        return NextResponse.json(resJson)
    }

    return NextResponse.json({
        success: false,
        message: 'Credential Error',
    })
}