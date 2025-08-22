import type PlayerModel from "../models/player-models.js";
import {
  deleteOnePlayer,
  findAllPlayers,
  findPlayerById,
  insertPlayer,
  updatePlayer,
} from "../repositories/players-repository.js";
import { badRequest, created, noContent, ok } from "../utils/http-helper.js";

export const getPlayerService = async () => {
  const data = await findAllPlayers();

  if (data) {
    return await ok(data);
  } else {
    return await noContent();
  }
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  if (data) {
    return await ok(data);
  } else {
    return await noContent();
  }
};

export const createPlayerService = async (player: PlayerModel) => {
  if (player) {
    await insertPlayer(player);
    return created();
  } else {
    return badRequest();
  }
};

export const deletePlayerService = async (id: number) => {
  if (id) {
    await deleteOnePlayer(id);
    return ok({ message: "Excluído com sucesso" });
  } else {
    return badRequest();
  }
};

export const updatePlayerService = async (id: number, body: any) => {
  if (id) {
    await updatePlayer(id, body);
    return ok({ message: "Atualizado com sucesso" });
  } else {
    return badRequest();
  }
};
