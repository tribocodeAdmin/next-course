import { Resend } from 'resend'
import WelcomTemplate from "@/emails/WelcomTemplate";
import {NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_EMAIL)
export async function POST(){
    await resend.emails.send({
        from: '...', // domain setup in resend.com
        to: 'manolo.manatlao@gmail.com',
        subject: '...',
        react: <WelcomTemplate name="Manolo" />
    })

    return NextResponse.json({})
}
