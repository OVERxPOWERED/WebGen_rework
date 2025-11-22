import { NextResponse } from "next/server";

// Store component code in memory (or use a database in production)
let currentComponentCode: string = '';

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    
    if (code) {
      currentComponentCode = code;
      return NextResponse.json({ success: true, message: 'Component code stored' });
    }
    
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  } catch (err) {
    console.error("Error storing component:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ code: currentComponentCode });
}