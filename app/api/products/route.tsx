import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";

export function GET(request: NextRequest){
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 2.5 },
        { id: 2, name: 'Bread', price: 3.5 },
    ])
}

export async function POST(request: NextRequest){
    const body = await request.json()
    const validate = schema.safeParse(body)

    if (!validate.success)
        return NextResponse.json(validate.error.errors, {status: 400});
    return NextResponse.json({ id: 1, name: 'Manolo'}, {status: 201});
}
