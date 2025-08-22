import type PlayerModel from "../models/player-models.js";

const database: PlayerModel[] = [
    {
        id:1,
        name:"CRISTIANO RONALDO"
    },
    {
        id:2,
        name: "Rodrigo Garro"
    },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
    return database;
}

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> =>{
    return database.find( player => player.id === id);
}

export const insertPlayer = async (player:PlayerModel) =>{
     database.push(player);
}

export const deleteOnePlayer = async(id:number) =>{

    const index = database.findIndex(p => p.id === id);

    if(index != -1){
        database.splice(index, 1);
    }
}

export const updatePlayer = async (id:number, player:PlayerModel): Promise<PlayerModel | undefined>=>{
    const index = database.findIndex(p => p.id === id);

    if(index != -1){
       database[index] = player;
       return database[index];
    }
}