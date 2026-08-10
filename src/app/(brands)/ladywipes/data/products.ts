export type Product = {
  id: string;
  nombre: string;
  formato: string;
  cantidad: string;
  descripcion: string;
  imagen: string;
  // Precio y URL de compra son OPCIONALES.
  // Cuando ambos se rellenen, la card muestra el precio y activa
  // automáticamente el botón "COMPRAR AHORA" sin rediseñar nada.
  price?: string;
  buyUrl?: string;
};

export const products: Product[] = [
  {
    id: "xl-wipes",
    nombre: "XL Wipes",
    formato: "Bolsa resellable",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "Tamaño XL para máxima cobertura. Fragance-free, con 99% agua purificada e ingredientes de origen vegetal.",
    // TODO: reemplazar por foto individual del XL Wipes
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "pack-6",
    nombre: "Pack de 6",
    formato: "Caja multi-pack",
    cantidad: "6 × 48 wipes",
    descripcion:
      "El value pack. Dermatológicamente testeado, pH balanceado, ideal para uso diario en casa.",
    // TODO: reemplazar por foto individual del Pack de 6
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "48-flushable",
    nombre: "48 Flushable Wipes",
    formato: "Paquete estándar",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "El clásico del baño de casa. Fibras vegetales que se desintegran en el inodoro.",
    // TODO: reemplazar por foto individual del pack de 48
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "24-wipes",
    nombre: "24 Wipes",
    formato: "Bolsa compacta",
    cantidad: "24 wipes",
    descripcion:
      "Punto medio ideal para probar o para llevar en la cartera. Sin alcohol, sin parabenos.",
    // TODO: reemplazar por foto individual del pack de 24
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "travel-pack",
    nombre: "Travel Pack",
    formato: "Bolsillo de viaje",
    cantidad: "10 wipes",
    descripcion:
      "Para la cartera, el gym, la oficina, el viaje largo. Cierre hermético que evita que se sequen.",
    // TODO: reemplazar por foto individual del travel pack
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "canister",
    nombre: "Tarro dispensador",
    formato: "Envase rígido",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "Se queda en la casa. Dispensa uno a la vez, cierre hermético — el resto se mantiene húmedo.",
    // TODO: reemplazar por foto individual del tarro
    imagen: "/images/lady-wipes/product.jpg",
  },
];
