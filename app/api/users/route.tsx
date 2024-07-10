import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name: 'Manolo'},
        {id: 2, name: 'Francis'},
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});
    return NextResponse.json({ id: 1, name: 'Manatlao'}, {status: 201});
}
