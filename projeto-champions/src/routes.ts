import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById,postPlayer, updatePlayer } from "./controllers/players-controller.js";
import { getClubs } from "./controllers/clubs-controller.js";

const router = Router();


//Player
router.get("/", getPlayer);
router.get("/:id", getPlayerById);
router.post("/",postPlayer);
router.delete("/:id", deletePlayer);
router.patch("/:id", updatePlayer);


//Clubs
router.get("/clubs", getClubs);

export default router;