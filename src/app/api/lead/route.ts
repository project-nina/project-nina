import { NextResponse } from "next/server";

// Forwards enquiries to LEAD_WEBHOOK_URL when set (CRM, Zapier, email). Otherwise logs them.
export async function POST(req: Request) {
  let data: Record<string, unknown> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!data.name || !data.phone) return NextResponse.json({ ok: false }, { status: 400 });
  const lead = { ...data, site: "project-nina", receivedAt: new Date().toISOString() };
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    } catch (e) {
      console.error("lead webhook failed", e);
    }
  }
  console.log("LEAD", JSON.stringify(lead));
  return NextResponse.json({ ok: true });
}
