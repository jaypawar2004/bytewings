// src/app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Subscriber from '@/models/Subscriber'; // Hamara naya Subscriber model

export async function POST(request) {
  try {
    // Database se connect karein
    await dbConnect();

    // Data lein
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    // Naya subscriber banayein
    // Mongoose schema yahaan email ko validate karega
    const newSubscriber = await Subscriber.create({ email });

    console.log('New Subscriber saved to MongoDB:', newSubscriber);

    // Success response
    return NextResponse.json(
      { message: "Thanks for subscribing!", data: newSubscriber },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription Error:', error);

    // Error handling (Duplicate email ke liye)
    if (error.code === 11000) { // 11000 MongoDB ka duplicate key error code hai
      return NextResponse.json(
        { message: "This email is already subscribed." },
        { status: 400 } // 400 (Bad Request) status bhejein
      );
    }

    // Baaki errors ke liye
    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
}