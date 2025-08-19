import * as http from "http";
import {
  getListEpisodes,
  getFilterEpisodes,
} from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0] || "/";
  const method = request.method;

  try {
    console.info(` ${method} ${request.url}`);

    if (method === HttpMethod.GET && baseUrl === Routes.LIST) {
      return await getListEpisodes(request, response);
    }

    if (method === HttpMethod.GET && baseUrl === Routes.ESPISODE) {
      return await getFilterEpisodes(request, response);
    }

    // Rota não encontrada
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Rota não encontrada" }));
  } catch (err) {
    console.error("Erro inesperado:", err);
    response.writeHead(500, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Erro interno do servidor" }));
  }
};
