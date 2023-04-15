import express from "express";
import ViteExpress from "vite-express";
import notes from "./routes/note.controller";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", notes);

ViteExpress.listen(app, port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
