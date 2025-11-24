// // src/app/api/contact/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/dbConnect';
// import Contact from '@/models/Contact';   

// // ✅ 1. Resend ko import karein
// import { Resend } from 'resend';

// // ✅ 2. Resend ko API key ke saath chalu karein
// // (Ye .env.local se 'RESEND_API_KEY' utha lega)
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     // 3. Database se connect karein
//     await dbConnect();

//     // 4. Frontend se data lein
//     const data = await request.json();
    
//     console.log('Received data:', data);

//     // ✅ 5. (FIX) 'firstName' aur 'lastName' ko 'name' mein jodein
//     let finalData = data;
//     if (data.firstName) {
//       finalData.name = `${data.firstName} ${data.lastName || ''}`.trim();
//     }
    
//     // 6. Mongoose Model ka use karke naya document banayein
//     // 'service' ab optional hai, 'name' ab ban gaya hai
//     const newContact = await Contact.create(finalData);

//     console.log('Saved to MongoDB:', newContact);

//     // ✅ 7. (RESEND) Data save hone ke baad ADMIN KO EMAIL BHEJEIN
//     try {
//       await resend.emails.send({
//         from: 'ByteWings <onboarding@resend.dev>', // Test ke liye ye "from" use karein
//         to: 'infobytewings@gmail.com', // ✅ Aapka admin email
//         subject: `Naya Contact Form Submission - ${finalData.name}`,
//         html: `
//           <h1>Nayi Inquiry Aayi Hai!</h1>
//           <p><strong>Naam:</strong> ${finalData.name}</p>
//           <p><strong>Company:</strong> ${finalData.company || 'N/A'}</p>
//           <p><strong>Email:</strong> ${finalData.email}</p>
//           <p><strong>Phone:</strong> ${finalData.phone}</p>
//           <p><strong>Service:</strong> ${finalData.service || 'N/A'}</p>
//           <p><strong>Message:</strong> ${finalData.message}</p>
//         `
//       });
//       console.log('Admin email notification bhej di gayi hai.');
//     } catch (emailError) {
//       console.error('Email bhejne mein error:', emailError);
//       // Agar email fail ho, toh bhi user ko error mat dikhao,
//       // kyunki form database mein submit ho gaya hai.
//     }

//     // 8. User (Frontend) ko success message bhejein
//     return NextResponse.json(
//       { message: "Form submitted successfully!", data: newContact },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('Error in API route:', error);
    
//     return NextResponse.json(
//       { message: "Something went wrong!", error: error.message },
//       { status: 500 }
//     );
//   }
// }








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

    // 🌟 FIX: Incoming data mein agar 'firstName' aur 'lastName' hain,
    // toh unhe combine karke 'name' field mein daal do.
    let finalData = data;
    
    if (data.firstName) {
      // FirstName aur LastName ko combine karke 'name' banao
      finalData.name = `${data.firstName || ''} ${data.lastName || ''}`.trim();
    } else if (!data.name) {
      // Agar 'firstName/lastName' nahi hai, aur 'name' bhi nahi hai, 
      // toh validation error aayega (jo aana chahiye agar required hai).
      // Hum Mongoose par chhod denge ki woh validation handle kare.
    }
    
    // 6. Mongoose Model ka use karke naya document banayein
    // Ab 'finalData' mein 'name' field maujood hoga.
    const newContact = await Contact.create(finalData);

    console.log('Saved to MongoDB:', newContact);

    // ✅ 7. (RESEND) Data save hone ke baad ADMIN KO EMAIL BHEJEIN
    try {
      await resend.emails.send({
        from: 'ByteWings <onboarding@resend.dev>', // Test ke liye ye "from" use karein
        to: 'infobytewings@gmail.com', // ✅ Aapka admin email
        subject: `New Travel Lead: ${finalData.name} (${finalData.packageType || 'General'})`, // finalData.name use kiya
        html: `
          <h1>Nayi Inquiry Aayi Hai!</h1>
          <p><strong>Naam:</strong> ${finalData.name}</p>
          <p><strong>Phone:</strong> ${finalData.phone}</p>
          <p><strong>Email:</strong> ${finalData.email}</p>
          <hr/>
          <p><strong>Package Type:</strong> ${finalData.packageType || 'N/A'}</p>
          <p><strong>Monthly Ad Budget:</strong> ${finalData.adBudget || 'N/A'}</p>
          <p><strong>diagnose:</strong> ${finalData.diagnose || 'N/A'}</p>
          <hr/>
          <p><strong>Message:</strong> ${finalData.message}</p>
        `
      });
      console.log('Admin email notification bhej di gayi hai.');
    } catch (emailError) {
      console.error('Email bhejne mein error:', emailError);
      // Agar email fail ho, toh bhi user ko error mat dikhao,
      // kyunki form database mein submit ho gaya hai.
    }

    // 8. User (Frontend) ko success message bhejein
    return NextResponse.json(
      { message: "Form submitted successfully!", data: newContact },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in API route:', error);
    
    // Agar validation error hai (jaise email missing), toh specific message dein
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { message: "Validation Failed. Please check all required fields.", error: error.message },
        { status: 400 } // Use 400 for client/validation errors
      );
    }

    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
}