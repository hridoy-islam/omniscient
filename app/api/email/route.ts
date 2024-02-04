import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { NextResponse } from "next/server";
import AdminEmail from "@/emails/AdminEmail";

const resend = new Resend("re_NukXA7Ue_7RT297d6J7sVtGmBGLvwtMaY");
export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();
  await resend.emails.send({
    from: "mining@robofxtrader.com",
    to: email,
    subject: "RoboFX Trader",
    react: ContactEmail({ name }),
  });

  await resend.emails.send({
    from: "mining@robofxtrader.com",
    to: "ahasan2k@gmail.com",
    subject: "RoboFX Trader",
    react: AdminEmail({ name, phone, email, message }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
