// generate fake api service

import { Notes } from "src/types/notes";

// Path: src/client/services/fake.api.service.ts

let defaultNotes: Notes = {
  time: 1633390000000,
  blocks: [
    {
      id: "1",
      type: "paragraph",
      data: {
        text: "Hello. Welcome to Editor.js",
      },
    },
    {
      id: "2",
      type: "paragraph",
      data: {
        text: "Let's see how it looks",
      },
    },
  ],
  version: "2.19.0",
};

export const getNotes = async (): Promise<Notes> => {
  const notes = localStorage.getItem("notes");
  let response = defaultNotes;
  if (notes) {
    response = JSON.parse(notes);
  }
  return new Promise<Notes>((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

export const saveNotes = async (notes: Notes) => {
  let fakeNotes = defaultNotes;
  localStorage.setItem("notes", JSON.stringify(notes));
  return new Promise<Notes>((resolve) => {
    setTimeout(() => {
      fakeNotes = notes;
      resolve(fakeNotes);
    }, 1000);
  });
};
