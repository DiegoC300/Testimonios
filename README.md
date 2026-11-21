# Testimonios – Práctica inicial de React

Práctica de la Unidad 3 de Ingeniería de Software (TecNM Celaya, AGO–DIC 2026).
Aplicación que muestra testimonios de clientes de uno en uno, con navegación
manual mediante componentes, props y estado.

> Los testimonios y fotografías son datos ficticios de demostración.

## Integrantes

- Abril Saro Arteaga – 23031152
- Diego Gerardo Cardoso Gómez – 23030386

## Etapa terminada

- [x] Etapa básica (navegación manual)
- [ ] Ampliación con reproducción automática (autoplay)

## Versiones utilizadas

| Herramienta | Versión |
|---|---|
| Node.js (`node -v`) | v__.__.__ |
| npm (`npm -v`) | __.__.__ |
| React | 19 |
| Vite | 8 |

## Instalación y ejecución

```bash
git clone <URL-del-repositorio>
cd Testimonios
npm install
npm run dev        # servidor de desarrollo
npm run build      # genera la versión de producción en dist
npm run preview    # revisa localmente la compilación
```

## Funcionalidades

- Tarjeta con fotografía, nombre, cargo y comentario.
- Contador de posición ("Testimonio 1 de 8").
- Botones **Anterior**, **Siguiente** y **Aleatorio**.
- Los extremos se conectan: del último se pasa al primero y viceversa.
- **Aleatorio** nunca repite el testimonio actual cuando hay dos o más registros.
- Con un registro la interfaz funciona; con cero registros muestra un mensaje.
- Diseño adaptable a móvil y escritorio, con navegación por teclado y foco visible.

## Estructura del proyecto

```
src/
├── components/
│   ├── Testimonial.jsx   # Presenta un testimonio (tarjeta)
│   └── Controls.jsx      # Botones; comunican acciones con callbacks
├── App.jsx               # Conserva el estado (index) y la lógica de navegación
├── data.js               # Arreglo con los 8 testimonios
├── main.jsx              # Monta React en #root e importa los estilos
└── styles.css            # Apariencia de la aplicación
```

## Decisiones principales

- **Datos separados de la presentación:** los testimonios viven en `data.js`;
  agregar uno no requiere tocar componentes.
- **`App` conserva el estado** (`index` con `useState`); `Testimonial` solo
  presenta y `Controls` solo avisa mediante `onPrev`, `onNext` y `onRandom`.
- **Navegación circular con `%`:** `(actual + 1) % total` para avanzar y
  `(actual - 1 + total) % total` para retroceder (se suma `total` para evitar
  negativos).
- **Aleatorio sin repetir:** se calcula un salto entre 1 y `total - 1` y se
  suma al índice actual, por lo que nunca cae en la misma posición.
- **Casos límite:** con `total === 0` se muestra un mensaje antes de acceder a
  los campos; con un solo registro, la navegación se mantiene en él.
- **Accesibilidad:** botones con texto visible, `alt` descriptivo en las
  fotografías, `aria-live="polite"` en el contador y estilo `:focus-visible`.
- **Imágenes remotas** de `pravatar.cc`: dependen de la conexión a internet.

## Organización del trabajo

- Tablero de tareas en GitHub Projects (Pendiente, En proceso, En revisión,
  Terminado) con una issue por tarea.
- Cada tarea se trabajó en su propia rama y se integró mediante Pull Request
  revisado por el otro integrante.
- Los roles de conductor y observador se alternaron entre tareas.
- Revisión por otra pareja: (nombres de la pareja revisora y fecha).

## Pruebas

El registro de pruebas P01 a P10 está en [PRUEBAS.md](./PRUEBAS.md).
