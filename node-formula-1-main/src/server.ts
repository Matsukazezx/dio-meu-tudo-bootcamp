import fastify from "fastify";
import cors from "@fastify/cors";
import teamRoutes from "./routes/teams";
import driverRoutes from "./routes/drivers";

const server = fastify({ logger: true });

// Habilitar CORS
server.register(cors, { origin: "*" });

// Registrar rotas
server.register(teamRoutes);
server.register(driverRoutes);

// Config de porta (via env ou default 3333)
const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

server.listen({ port: PORT, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on http://localhost:${PORT}`);
});
