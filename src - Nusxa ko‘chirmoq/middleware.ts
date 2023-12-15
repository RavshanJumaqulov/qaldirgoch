import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
    const token = req.cookies.get('next-auth.csrf-token')?.value
    req.headers.set('Authorization',  `Bearer ${req.cookies.get('accessToken')}`) 
    // console.log('.........................Middkeware.............................');
    const response = NextResponse.next({
        request: {
            headers: new Headers(req.headers)
        }
    })
    response.headers.set('x-custom-auth-header', 'isAuthed')
    return response
}
export const config = {
    matcher: ["/", '/app', '/login', '/create']
}