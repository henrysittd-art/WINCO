# Lady Wipes — carpeta autocontenida

Este directorio no depende de ningún componente, dato o estilo de WINCO ni de Macho Wipes. Todos los componentes viven en `./components/` (prefijo `Lw`), los datos en `./data/`, y las variables de paleta en `./styles.css` (scope `.ladywipes`).

Para moverlo a un proyecto Next.js independiente: copiar la carpeta completa a `src/app/`, mantener la configuración base de Tailwind v4 y la fuente Geist Sans cargadas por el root layout.
