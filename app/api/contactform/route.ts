import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact, { IContact } from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, subject, message } = body as Partial<IContact>;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = await Contact.create({ name, email, subject, message });

    return NextResponse.json({ message: "Message sent successfully", data: newContact });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
