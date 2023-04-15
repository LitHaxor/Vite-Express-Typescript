import { Notes } from "src/types/notes";
import {
  getNotes as getNotesFake,
  saveNotes as saveNotesFake,
} from "./fake.api.service";

export const getNotes = async (): Promise<Notes> => {
  try {
    const response = await fetch("/api/note");
    const data = await response.json();
    return data;
  } catch (error) {
    return await getNotesFake();
  }
};

export const saveNotes = async (notes: Notes): Promise<Notes> => {
  try {
    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify(notes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return await saveNotesFake(notes);
  }
};
