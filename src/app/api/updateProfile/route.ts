import { NextRequest, NextResponse } from "next/server";
import { api } from "../lib/api";
import { UpdateProfileInterface } from "../../../../types/TypeInterfaces";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    const response = await api<UpdateProfileInterface>({
        url: '/update-profile/',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${req.cookies.get('accessToken')?.value}`
        },
        data: body.data
    });
    console.log(response);

    if (response.status == 200) {
        return NextResponse.json(response.data)
    }
    return NextResponse.json(response.data)
}