const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  body: String,
  date: { type: Date, default: Date.now },
});

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
