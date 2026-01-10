import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Subscription, { ISubscription } from "@/models/Subscription";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { email } = body as Partial<ISubscription>;
    console.log("Received email:", email);
    if (!email) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    
    Subscription.findOne({ email }).then((subscription) => {
      if (subscription) {
        return NextResponse.json({ error: "Email is already subscribed" }, { status: 400 });
      }
    });
    const newSubscription = await Subscription.create({ email });

    return NextResponse.json({ message: "Subscription created successfully", data: newSubscription });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
