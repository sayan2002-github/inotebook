import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    default: "#general",
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export const Notes = mongoose.model('Notes', NoteSchema);