import express, { json} from "express";
import router from "./routes.js";
import cors from 'cors';

function createAPP() {
  const app = express();

  app.use(json());
  app.use("/", router);
  app.use(cors());
  
  return app;
}

export default createAPP;

