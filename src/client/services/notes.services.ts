import { Notes } from "src/types/notes";

export const getNotes = async (): Promise<Notes | null> => {
  try {
    const response = await fetch("/api/note");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const saveNotes = async (notes: Notes): Promise<Notes | null> => {
  console.log(notes);
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
    console.log(error);
    return null;
  }
};
