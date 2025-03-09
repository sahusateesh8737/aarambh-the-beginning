import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Configure CORS
app.use(cors({
  origin: ['https://aarambh-six.vercel.app', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// API endpoint for handling user registrations
app.post('/api/users', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      regNumber,
      section,
      position,
      skills
    } = req.body;

    // Create new user document
    const user = new User({
      name,
      email,
      phone,
      regNumber,
      section,
      position,
      skills
    });

    // Save to database
    await user.save();

    res.status(201).json({ 
      message: 'Registration successful!',
      user: user 
    });
  } catch (error) {
    console.error('Error processing registration:', error);
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).json({ 
        message: 'Email or Registration number already exists.' 
      });
    } else {
      res.status(500).json({ 
        message: 'Error processing registration' 
      });
    }
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;