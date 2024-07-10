import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest){
    const products = await prisma.product.findMany()

    return NextResponse.json(products)
}

export async function POST(request: NextRequest){
    const body = await request.json()
    const validate = schema.safeParse(body)

    if (!validate.success)
        return NextResponse.json(validate.error.errors, {status: 400});

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
        }
    })

    return NextResponse.json(newProduct, {status: 201});
}
