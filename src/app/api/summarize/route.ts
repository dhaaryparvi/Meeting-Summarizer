// app/api/summarize/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const BodySchema = z.object({
  transcript: z.string().min(1, "Transcript is required"),
  prompt: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { transcript, prompt } = BodySchema.parse(json);

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const system = `You produce concise, structured meeting summaries in Markdown. Respect the user's instruction. Use relevant sections such as:\n- Executive Summary\n- Key Decisions\n- Action Items (owner, deadline)\n- Risks/Blockers\n- Next Steps`;

    const user = `Custom instruction: ${prompt || "Summarize in bullet points for executives"}\n\nTranscript:\n"""${transcript}"""`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or another capable model you have access to
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.2,
    });

    const summary = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ summary });
  } catch (err: any) {
    console.error("/api/summarize error:", err);
    const msg = err?.issues?.[0]?.message || err?.message || "Failed to summarize";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}