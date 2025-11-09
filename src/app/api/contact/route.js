// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';

// ✅ 1. Resend ko import karein
import { Resend } from 'resend';

// ✅ 2. Resend ko API key ke saath chalu karein
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // 3. Database se connect karein
    await dbConnect();

    // 4. Frontend se data lein
    const data = await request.json();
    console.log('Received data:', data);

    // 5. Mongoose Model ka use karke data save karein
    const newContact = await Contact.create(data);
    console.log('Saved to MongoDB:', newContact);

    // ✅ 6. (NEW STEP) Data save hone ke baad ADMIN KO EMAIL BHEJEIN
    try {
      await resend.emails.send({
        from: 'ByteWings <onboarding@resend.dev>', // Test ke liye ye "from" use karein
        to: 'infobytewings@gmail.com', // ✅ Aapka admin email
        subject: `Naya Contact Form Submission - ${data.name}`,
        html: `
          <h1>Nayi Inquiry Aayi Hai!</h1>
          <p><strong>Naam:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `
      });
      console.log('Admin email notification bhej di gayi hai.');
    } catch (emailError) {
      console.error('Email bhejne mein error:', emailError);
      // Agar email fail ho, toh bhi user ko error mat dikhao,
      // kyunki form database mein submit ho gaya hai.
    }

    // 7. User (Frontend) ko success message bhejein
    return NextResponse.json(
      { message: "Form submitted successfully!", data: newContact },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
}