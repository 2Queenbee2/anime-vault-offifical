export type Product = {
  sku: string;
  name: string;
  price: string;
  image?: string;
  featured?: boolean;
  isNew?: boolean;
};

export const products: Product[] = [
  { sku: "VAULT-0042", name: "Ronin Tee", price: "$32", featured: true },
  { sku: "VAULT-0051", name: "Wanderer Pin", price: "$12" },
  { sku: "VAULT-0058", name: "Archive Print", price: "$24" },
  { sku: "VAULT-0063", name: "Ink Wash Hoodie", price: "$54", isNew: true },
  { sku: "VAULT-0071", name: "Ronin Sticker Sheet", price: "$8" },
  { sku: "VAULT-0080", name: "Vault Tote", price: "$20" },
];
