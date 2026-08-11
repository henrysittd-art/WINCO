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
  // Cuando la imagen es una foto individual del empaque sobre fondo oscuro,
  // se renderiza sin overlay ni mix-blend y ocupa más espacio en la card.
  floating?: boolean;
};

export const products: Product[] = [
  {
    id: "xl-flushable",
    nombre: "XL Flushable Wipes",
    formato: "Paquete resellable",
    cantidad: "48 wipes · 7×7 in",
    descripcion:
      "Tamaño XL para máxima cobertura. Fibras vegetales que se desintegran en el inodoro.",
    imagen: "/images/macho-wipes/xl-flushable.png",
    floating: true,
  },
  {
    id: "cylinder",
    nombre: "Cylinder",
    formato: "Envase rígido",
    cantidad: "60 wipes · 7×7 in",
    descripcion:
      "Cilindro rígido con cierre hermético. Dispensa una toallita a la vez sin que se sequen las demás.",
    imagen: "/images/macho-wipes/canister.png",
    floating: true,
  },
  {
    id: "travel-pack",
    nombre: "Travel Pack",
    formato: "Bolsa resellable",
    cantidad: "24 wipes · XL",
    descripcion:
      "El formato portátil. Bolsa resellable con hanger — cabe en la mochila, la guantera o el bolsillo lateral.",
    imagen: "/images/macho-wipes/travel-pack.png",
    floating: true,
  },
  {
    id: "on-the-go",
    nombre: "On The Go",
    formato: "Pack de bolsillo",
    cantidad: "10 wipes",
    descripcion:
      "Sachet slim para llevar en el bolsillo, la mochila o la guantera. Discretos y siempre a mano.",
    imagen: "/images/macho-wipes/on-the-go.png",
    floating: true,
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
