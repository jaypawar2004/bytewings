// src/models/Subscriber.js
import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: true, // Ek email ID ek hi baar subscribe kar sakti hai
    match: [/.+\@.+\..+/, 'Please provide a valid email address.'],
    trim: true,
  },
}, {
  timestamps: true, // Ye 'createdAt' field add kar dega
});

export default mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);