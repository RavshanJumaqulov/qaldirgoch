import { NextRequest, NextResponse } from "next/server";
import { api } from "../lib/api";

type Body = {
    slug: string,
    quiztaker: number
}
export async function POST(req: NextRequest, res: NextResponse) {
    const body: Body = await req.json();
    const request = await api({
        url: `/quizzes/${body.slug}/submit/`,
        method: 'post',
        data: { quiztaker: body.quiztaker },
    })

    if (request.status == 200) {
        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Testlar yakunlandi!',
            data: request.data
        })
    }

    return NextResponse.json({
        success: false,
        status: request.status,
        message: 'Qandaydir xatolik sodir bo`ldi',
        data: request.data
    })
}