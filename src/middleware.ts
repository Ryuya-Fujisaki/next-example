/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    console.log('ミドルウェア');

    return NextResponse.next();
}

export const confit = {
    matcher: ['/', '/task']
}