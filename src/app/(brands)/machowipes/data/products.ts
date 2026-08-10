export type Product = {
  id: string;
  nombre: string;
  formato: string;
  cantidad: string;
  descripcion: string;
  imagen: string;
  // Precio y URL de compra son OPCIONALES.
  // Cuando ambos se rellenen, la card de producto muestra el precio
  // y activa automáticamente el botón "COMPRAR AHORA" sin necesidad
  // de rediseñar el componente.
  price?: string;
  buyUrl?: string;
};

export const products: Product[] = [
  {
    id: "xl-flushable",
    nombre: "XL Flushable Wipes",
    formato: "Paquete resellable",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "Tamaño XL para máxima cobertura. Fibras vegetales que se desintegran en el inodoro.",
    // TODO: reemplazar por foto individual del XL Flushable
    imagen: "/images/macho-wipes/product.jpg",
  },
  {
    id: "pack-6",
    nombre: "Pack de 6",
    formato: "Caja multi-pack",
    cantidad: "6 × 48 wipes",
    descripcion:
      "El value pack. Un mes largo de suministro para uso diario en casa.",
    // TODO: reemplazar por foto individual del Pack de 6
    imagen: "/images/macho-wipes/product.jpg",
  },
  {
    id: "48-flushable",
    nombre: "48 Flushable Wipes",
    formato: "Paquete estándar",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "El clásico. Perfecto para el baño de casa: húmedos, resistentes y desechables al inodoro.",
    // TODO: reemplazar por foto individual del pack de 48
    imagen: "/images/macho-wipes/product.jpg",
  },
  {
    id: "24-wipes",
    nombre: "24 Wipes",
    formato: "Bolsa compacta",
    cantidad: "24 wipes",
    descripcion:
      "El punto medio. Ideal para probar antes del pack grande o llevar en la mochila.",
    // TODO: reemplazar por foto individual del pack de 24
    imagen: "/images/macho-wipes/product.jpg",
  },
  {
    id: "canister",
    nombre: "Tarro dispensador",
    formato: "Envase rígido",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "Se queda en la casa. Cierre hermético, dispensa uno a la vez sin que se seque el resto.",
    // TODO: reemplazar por foto individual del tarro dispensador
    imagen: "/images/macho-wipes/product.jpg",
  },
];
