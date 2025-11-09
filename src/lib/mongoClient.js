// src/lib/mongoClient.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local')
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // Development mode mein, global variable use karein taaki
  // connection hot reloads par bana rahe.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // Production mode mein, global variable ki zaroorat nahi.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Ek module-scoped MongoClient promise ko export karein.
export default clientPromise