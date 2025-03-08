import mongoose from 'mongoose';
import User from '../server/models/User.js';

// Initialize MongoDB connection
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);
  cachedDb = db;
  return db;
}

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    if (req.method === 'POST') {
      const { name, email, phone, regNumber, section, position, skills } = req.body;

      const user = new User({
        name,
        email,
        phone,
        regNumber,
        section,
        position,
        skills
      });

      await user.save();
      res.status(201).json({ message: 'Registration successful!', user });
    } else if (req.method === 'GET') {
      const users = await User.find({}).sort({ createdAt: -1 });
      res.status(200).json(users);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email or Registration number already exists.' });
    } else {
      res.status(500).json({ message: 'Error processing request' });
    }
  }
}