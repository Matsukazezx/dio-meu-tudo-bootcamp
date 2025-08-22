import { type Request, type Response } from "express";
import {
  createPlayerService,
  deletePlayerService,
  getPlayerByIdService,
  getPlayerService,
  updatePlayerService,
} from "../services/players-service.js";

export const getPlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPlayerById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const idParam = req.params.id;
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      res.status(400).json({ message: "Invalid player ID" });
      return;
    }

    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const postPlayer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body;

    const httpResponse = await createPlayerService(body);
    if (httpResponse) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePlayer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const idParam = req.params.id;
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      res.status(400).json({ message: "Invalid player ID" });
      return;
    }
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePlayer = async (req: Request, res: Response): Promise<void> => {
  try {
     const idParam = req.params.id;
     const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      res.status(400).json({ message: "Invalid player ID" });
      return;
    }
    const body = req.body;
    const httpResponse = await updatePlayerService(id, body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};