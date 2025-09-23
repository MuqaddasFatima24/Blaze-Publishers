import { NextRequest, NextResponse } from "next/server";

interface SubmitFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  description: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: SubmitFormData = await req.json();
    console.log(body)

    const formBody = new URLSearchParams({
      name: body.name,
      email: body.email,
      phone: body.phone ?? "",
      service: body.service ?? "",
      date: body.date ?? "",
      time: body.time ?? "",
      description: body.description,
    }).toString();

    const response = await fetch(process.env.SHEET_WEBAPP_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    const result = await response.text();
    console.log("Google Script Response:", result);

    if (!response.ok) {
      throw new Error("Failed to save data in Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submit error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
