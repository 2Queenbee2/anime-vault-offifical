export type GameItem = {
  sku: string;
  name: string;
  price: string;
  popular?: boolean;
};

export const gameItems: GameItem[] = [
  { sku: "SERV-0007", name: "VIP rank", price: "$9.99", popular: true },
  { sku: "SERV-0012", name: "Starter kit", price: "$4.99" },
  { sku: "SERV-0019", name: "Elite rank", price: "$19.99" },
  { sku: "SERV-0025", name: "Cosmetic bundle", price: "$6.99" },
];
