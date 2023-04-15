import { Notes } from "../../types/notes";

export class NotesRepository {
  private data: Notes = {
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

  static instance: NotesRepository;

  static getInstance(): NotesRepository {
    if (!NotesRepository.instance) {
      NotesRepository.instance = new NotesRepository();
    }
    return NotesRepository.instance;
  }

  async getNotes(): Promise<Notes> {
    return this.data;
  }

  async updateNotes(notes: Notes): Promise<void> {
    this.data = notes;
  }
}
