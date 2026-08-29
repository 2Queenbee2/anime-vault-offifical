export type Service = {
  sku: string;
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    sku: "SVC-0003",
    name: "Custom commission",
    price: "From $40",
    description: "A hand-drawn piece built around your favorite series.",
    featured: true,
  },
  {
    sku: "SVC-0007",
    name: "Print restoration",
    price: "From $25",
    description: "Clean up and reprint a worn or damaged piece.",
  },
  {
    sku: "SVC-0011",
    name: "Custom framing",
    price: "From $30",
    description: "Framing sized and finished to match your print.",
  },
];
