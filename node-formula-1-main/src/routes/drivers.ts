import { FastifyInstance } from "fastify";
import { drivers } from "../data/drivers";

export default async function driverRoutes(server: FastifyInstance) {
  // Listar todos os drivers
  server.get("/drivers", async () => {
    return { drivers };
  });

  // Buscar driver por ID
  server.get<{ Params: { id: string } }>("/drivers/:id", async (request, reply) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      reply.code(404);
      return { message: "Driver Not Found" };
    }

    return { driver };
  });
}
