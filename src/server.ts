import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts.js";
import { uploadVideoRoute } from "./routes/upload-video.js";
import { createTranscriptionRoute } from "./routes/create-transcription.js";

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333");
  });
