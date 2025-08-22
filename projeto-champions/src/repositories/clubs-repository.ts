import type ClubModel from "../models/club-model.js";

const database:ClubModel[] = [
  {
    id: 1,
    name: "Real Madrid",
  },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};
