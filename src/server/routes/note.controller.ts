import express from "express";
import { NotesRepository } from "../services/note.services";

const notes = express.Router();

const notesRepository = NotesRepository.getInstance();

notes.get("/note", async (_, res) => {
  const notes = await notesRepository.getNotes();
  res.status(200).json(notes);
});

notes.post("/note", (req, res) => {
  const newData = req.body;
  if (newData) {
    notesRepository.updateNotes(newData);
  }
  res.status(200).json(notesRepository.getNotes());
});

export default notes;
