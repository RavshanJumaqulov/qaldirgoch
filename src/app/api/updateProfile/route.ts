import { NextRequest, NextResponse } from "next/server";
import { api } from "../lib/api";
import { UpdateProfileInterface } from "../../../../types/TypeInterfaces";

export async function PUT(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    console.log(body);

    const response = await api<UpdateProfileInterface>({
        url: '/update-profile/',
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${req.cookies.get('accessToken')?.value}`
        },
        data: body.data
    });
    console.log(response);
    if (response.status == 200) {
        return NextResponse.json(response.data, { status: 200 })
    }
    return NextResponse.json(response.data, { status: response.status })
}