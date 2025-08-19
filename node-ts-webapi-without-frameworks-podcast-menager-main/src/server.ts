import * as http from "http";
import { app } from "./app";

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});

server.on("error", (err) => {
  console.error("Erro ao iniciar o servidor:", err);
  process.exit(1);
});
