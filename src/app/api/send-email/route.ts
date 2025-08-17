// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const BodySchema = z.object({
  recipients: z.array(z.string().email()).min(1, "At least one valid email is required"),
  subject: z.string().default("Meeting Summary"),
  body: z.string().min(1, "Email body is empty"),
});

function escapeHtml(s = "") {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { recipients, subject, body } = BodySchema.parse(json);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: recipients.join(","),
      subject,
      text: body,
      html: `<pre style="font-family:ui-monospace,Menlo,Monaco,Consolas,monospace;white-space:pre-wrap">${escapeHtml(body)}</pre>`,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (err: any) {
    console.error("/api/send-email error:", err);
    const msg = err?.issues?.[0]?.message || err?.message || "Failed to send email";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}