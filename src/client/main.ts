import { Notes } from "src/types/notes";
import { getNotes, saveNotes } from "./services/notes.services";
import "./styles.css";
import EditorJs from "@editorjs/editorjs";

let notes = {} as Notes;

const editor = new EditorJs({
  holder: "editorjs",
  readOnly: true,
});

const onInit = async () => {
  const data = await getNotes();
  if (data) {
    notes = data;
    editor.isReady.then(() => {
      editor.render(notes);
    });
  }
};

onInit();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <h1 class="text-xl mt-1 text-center">Notes editor</h1>
    <div class="mt-10 editor-container">
        <div class="flex flex-end"> <button class="button-primary editor">Edit</button></div>
        <div class="mt-1" id="editorjs">
    </div>
   </div>
  </div>
`;

const editButton = document.querySelector<HTMLButtonElement>(".editor")!;

editButton.addEventListener("click", async () => {
  if (!editor.readOnly.isEnabled) {
    const savedData = await editor.save();
    console.log("saved", savedData);
    if (savedData) {
      await saveNotes(savedData as Notes);
    }
  }
  editor.readOnly.toggle();
  editButton.textContent = editor.readOnly.isEnabled ? "Edit" : "Save";
});
