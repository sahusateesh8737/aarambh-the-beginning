import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  regNumber: {
    type: String,
    required: true,
    unique: true
  },
  section: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);