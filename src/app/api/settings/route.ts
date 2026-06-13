import { NextResponse } from "next/server";
import { getSettings } from "@/lib/admin-settings";

export async function GET() {
  try {
    const settings = getSettings();
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
