import { FastifyInstance } from "fastify";
import { teams } from "../data/teams";

export default async function teamRoutes(server: FastifyInstance) {
  server.get("/teams", async () => {
    return { teams };
  });
}
