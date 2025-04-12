import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Task {
    id: number;
    name: string;
}

const tasks: Task[] = [
    {id: 1, name: 'プログラミング'},
    {id: 2, name: 'ランニング'}
];

export const GET = async() => {
    return NextResponse.json({ tasks }, {
        status: 200
    })
};

export const dynamic = 'force-dynamic';