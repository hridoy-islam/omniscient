import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { NextResponse } from "next/server";
import SupportEmail from "@/emails/SupportEmail";

const resend = new Resend("re_NukXA7Ue_7RT297d6J7sVtGmBGLvwtMaY");
export async function POST(req: Request) {
  const { subject, name, email, department, priority, message } =
    await req.json();
  await resend.emails.send({
    from: "mailing@robofxtrader.com",
    to: email,
    subject: "RoboFX Trader",
    react: ContactEmail({ name }),
  });

  await resend.emails.send({
    from: "mailing@robofxtrader.com",
    to: "ahasan2k@gmail.com",
    subject: "RoboFX Trader",
    react: SupportEmail({
      subject,
      name,
      email,
      department,
      priority,
      message,
    }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
