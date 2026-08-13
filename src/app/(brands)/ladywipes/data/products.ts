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
      "Tamaño XL para máxima cobertura. Fragrance-free con 99% agua purificada e ingredientes de origen vegetal que se desintegran en el inodoro.",
    imagen: "/images/lady-wipes/xl-flushable.png",
    floating: true,
  },
  {
    id: "cylinder",
    nombre: "Cylinder",
    formato: "Envase rígido",
    cantidad: "60 wipes · 7×7 in",
    descripcion:
      "Cilindro rígido con cierre hermético. Dispensa una toallita a la vez sin que se sequen las demás.",
    imagen: "/images/lady-wipes/cylinder.png",
    floating: true,
  },
  {
    id: "travel-pack",
    nombre: "Travel Pack",
    formato: "Bolsa resellable",
    cantidad: "24 wipes · XL",
    descripcion:
      "El formato portátil. Bolsa resellable con hanger — cabe en la cartera, la mochila o el gym.",
    // TODO: reemplazar por foto individual del Travel Pack Lady
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "on-the-go",
    nombre: "On The Go",
    formato: "Sachet slim",
    cantidad: "10 wipes",
    descripcion:
      "Formato ultra portátil de 10 wipes. Discreto y siempre a mano para el día a día — cartera, gimnasio o carro.",
    // TODO: reemplazar por foto individual del On The Go Lady
    imagen: "/images/lady-wipes/product.jpg",
  },
  {
    id: "pocket-size",
    nombre: "Pocket Size",
    formato: "Caja dispensadora",
    cantidad: "30 wipes individuales",
    descripcion:
      "Cada wipe viene sellado en su propio sobre — perfecto para llevar uno cuando sabés que va a hacer falta.",
    // TODO: reemplazar por foto individual del Pocket Size Lady
    imagen: "/images/lady-wipes/product.jpg",
  },
];
