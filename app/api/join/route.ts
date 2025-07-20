import { connectToDB } from "@/lib/mongodb";
import Email from "@/models/Email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await connectToDB();

    const existing = await Email.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Already on the list" }, { status: 200 });
    }

    await Email.create({ email });
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
