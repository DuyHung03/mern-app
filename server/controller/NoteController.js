const Note = require("../models/note");
const moment = require("moment");
const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

const getNote = async (req, res) => {
  const noteId = req.params.id;
  const note = await Note.findById(noteId);
  res.json({ note });
};

const createNote = async (req, res) => {
  // Get the sent in data off request body
  const { title, body, date } = req.body;

  // Create a note with it
  const note = await Note.create({
    title: title,
    body: body,
    date: moment(date).format("YYYY-MM-DD HH:mm:ss"),
  });

  // respond with the new note
  res.json({ note });
};
const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, body } = req.body;
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });
  const note = await Note.findById(noteId);
  res.json({ note });
};
const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  await Note.findByIdAndDelete(noteId);
  res.json({ message: "Note deleted" });
};

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };
