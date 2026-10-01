import { analyzeBudget, validateInput } from "../../../lib/analysis";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = validateInput(await request.json());
    const analysis = await analyzeBudget(input);
    return Response.json({ ok: true, input, analysis }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return Response.json({ ok: false, error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
