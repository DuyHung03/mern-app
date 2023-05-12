if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const connectToDB = require("../config/connectToDB");
connectToDB();
const app = express();
const noteController = require("../controller/NoteController");

// Configure express app
app.use(express.json());
app.use(cors());

app.get("/notes", noteController.getNotes);

app.get("/notes/:id", noteController.getNote);

app.post("/notes", noteController.createNote);

app.put("/notes/:id", noteController.updateNote);

app.delete("/notes/:id", noteController.deleteNote);

app.listen(process.env.PORT, () => {
  console.log("Server is running at port", process.env.PORT);
});
