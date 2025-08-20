export interface Driver {
  id: number;
  name: string;
  team: string;
}

export const drivers: Driver[] = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 3, name: "Lando Norris", team: "McLaren" }
];
