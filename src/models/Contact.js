// src/models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  // Ye fields aapke 'ContactForm.jsx' se match hone chahiye
  name: {
    type: String,
    required: [true, 'Please provide your name.'], // Ab 'name' zaroori hai
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    match: [/.+\@.+\..+/, 'Please provide a valid email address.'], // Email validation
    trim: true,
  },
  service: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    trim: true,
  },
}, {
  // Ye automatically 'createdAt' aur 'updatedAt' fields add kar dega
  timestamps: true, 
});

/**
 * Next.js dev server mein models baar baar re-compile ho jaate hain.
 * Ye code check karta hai ki model pehle se bana hai ya nahi.
 */
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);