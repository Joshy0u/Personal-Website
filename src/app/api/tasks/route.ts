import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest){
    const tasks = [
        {id: 1, title: "task 1", completed: false},
        {id: 2, title: "task 2", completed: true},
    ];
    return NextResponse.json(tasks);
}