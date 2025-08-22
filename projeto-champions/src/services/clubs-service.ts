import { findAllClubs } from "../repositories/clubs-repository.js";
import { ok } from "../utils/http-helper.js"

export const getClubsService = async () =>{
    const data = await findAllClubs();
    const response = ok(data);
    return response;
}