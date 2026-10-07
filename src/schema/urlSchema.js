import mongoose from "mongoose";
export const urlSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    unique:true,
    type: String,
    required: true
  },
  lastAccessedAt: {
    type: Date
  },
  expiresAt: {
    type: Date
  },
  clicks: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // adds createdAt + updatedAt automatically
});


