/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Task {
    id: number;
    name: string;
}

const tasks: Task[] = [
    {id: 1, name: 'プログラミング'},
    {id: 2, name: 'ランニング'}
];

export const GET = async() => {}