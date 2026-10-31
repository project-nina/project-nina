import { NextResponse } from "next/server";

// Only acknowledge an enquiry after the configured receiver accepts it.
export async function POST(req: Request) {
  let data: Record<string, unknown> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!data || typeof data !== "object" || Array.isArray(data) ||
      typeof data.name !== "string" || !data.name.trim() ||
      typeof data.phone !== "string" || !data.phone.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const lead = { ...data, site: "project-nina", receivedAt: new Date().toISOString() };
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ ok: false }, { status: 503 });
  try {
    const response = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(25000),
    });
    if (!response.ok) throw new Error("Receiver rejected enquiry");
    // Apps Script returns application errors inside an HTTP 200 response.
    const receipt: unknown = await response.json();
    if (!receipt || typeof receipt !== "object" ||
        !("ok" in receipt) || receipt.ok !== true) {
      throw new Error("Receiver did not confirm enquiry");
    }
  } catch {
    // Do not write contact details or secret webhook URLs to deployment logs.
    console.error("Lead delivery failed");
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
