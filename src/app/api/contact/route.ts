// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // 1) Parse the request body
    const body = await request.json();
    const { recaptcha, ...formData } = body;

    // 2) Verify reCAPTCHA
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
      }
    );
    const recaptchaResult = await recaptchaRes.json();
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // 3) Extract source path from referer header
    let sourcePath = "";
    const referer = request.headers.get("referer");
    if (referer) {
      try {
        sourcePath = new URL(referer).pathname;
      } catch {
        // ignore invalid URL, keep empty string
      }
    }

    // 4) Submit to Google Sheets via Apps Script
    const savedToSheets = await addToGoogleSheetViaAppScript(
      formData,
      sourcePath
    );

    // 5) Return success response
    return NextResponse.json({
      message: "Form submitted successfully",
      savedToSheets,
    });
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper: POST formData + sourcePath to your Apps Script Web App
async function addToGoogleSheetViaAppScript(
  formData: any,
  sourcePath: string
): Promise<boolean> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwF8Ze3nXsZ37zi-KeqJw5vr6dgbsI2NQ9taFyAWJPI3cSZ-emOJcisnYNHY57ls5ygWQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: formData.name || "",
          email: formData.email || "",
          phone: formData.phone || "",
          countryCode: formData.countryCode || "",
          state: formData.state || "",
          source: `${sourcePath ? " - " + sourcePath : ""}`,
        }),
      }
    );

    if (!response.ok) throw new Error("Google Sheets submission failed");
    const result = await response.json();
    return !!result;
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return false;
  }
}
