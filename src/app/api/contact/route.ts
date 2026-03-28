import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, phone, email, service, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Eco Air Services <onboarding@resend.dev>",
      to: "ecoairservices@yahoo.com",
      subject: `New Contact Form Submission — ${service}`,
      html: `
        <h2>New Message from Eco Air Services Website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message || "No message provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
