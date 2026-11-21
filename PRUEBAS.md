# Registro de pruebas – Etapa básica

Datos iniciales: 3 registros (P01 a P07); 8 registros desde P08.

**Método de verificación**

- **Lógica:** se ejecutó la lógica de navegación de `App.jsx` (`next`, `prev`,
  `random`) con los datos reales de `data.js` en Node.js. Cubre P01 a P08.
- **Navegador:** cada prueba se confirma además en la aplicación corriendo
  (`npm run dev`). La columna *Confirmado* se marca al hacerlo.
- P09 y P10 solo se pueden comprobar en el navegador y en la terminal.

| Prueba | Acción | Resultado esperado | Resultado obtenido | Estado | Confirmado en navegador |
|---|---|---|---|---|---|
| P01 Inicio | Abrir la aplicación | Se muestra Ana y "Testimonio 1 de 3" | Índice inicial 0: se muestra Ana Pérez, "Testimonio 1 de 3" | Aprobado (lógica) | [ ] |
| P02 Siguiente | Desde Ana, clic en Siguiente | Se muestra Luis y "2 de 3" | Índice 0 → 1: Luis García, "2 de 3" | Aprobado (lógica) | [ ] |
| P03 Límite superior | Desde María, clic en Siguiente | Se muestra Ana | Índice 2 → 0: `(2 + 1) % 3 = 0`, se muestra Ana | Aprobado (lógica) | [ ] |
| P04 Límite inferior | Desde Ana, clic en Anterior | Se muestra María | Índice 0 → 2: `(0 - 1 + 3) % 3 = 2`, se muestra María | Aprobado (lógica) | [ ] |
| P05 Aleatorio | Clic en Aleatorio 10 veces | Siempre cambia a otra posición válida | En 5000 intentos por cada posición inicial, con 2, 3 y 8 registros, nunca repitió el índice ni salió del rango. El salto `1 + floor(random × (total − 1))` va de 1 a `total − 1`, por lo que nunca es múltiplo de `total` | Aprobado (lógica) | [ ] |
| P06 Un registro | Dejar un solo objeto en `data.js` | Los controles mantienen el registro; sin errores | Con `total = 1`, Siguiente y Anterior dan `% 1 = 0`; Aleatorio sale con `return` si `total < 2`. Siempre índice 0 | Aprobado (lógica) | [ ] |
| P07 Sin registros | Usar `[]` en `data.js` | Mensaje y sin controles | Con `total === 0`, `App` devuelve el mensaje "No hay testimonios disponibles." antes de acceder a `testimonios[index]`; no renderiza `Controls` | Aprobado (revisión de código) | [ ] |
| P08 Ampliación de datos | Restaurar y usar los 8 registros | Navegación completa y contador "de 8" | `data.js` con 8 registros, ids del 1 al 8 únicos y todos los campos presentes. El recorrido da la vuelta completa en 8 clics de Siguiente | Aprobado (lógica) | [ ] |
| P09 Presentación | Probar 320, 768 y 1280 px, textos largos y teclado | Sin scroll horizontal, foco visible, textos ajustados | En 320, 768 y 1280 px no hubo scroll horizontal. La tarjeta y los botones se mostraron completos en los tres anchos. Un texto largo y una palabra larga sin espacios se ajustaron dentro de la tarjeta sin desbordarse. Con Tab el foco recorrió Anterior, Siguiente y Aleatorio con contorno visible, y Enter y Espacio activaron los botones. | Aprobado |
| P10 Compilación | Ejecutar `npm run build` | Compila sin errores | npm run build compiló sin errores. Se generó la carpeta dist y no aparecieron errores de aplicación en consola. | Aprobado |

## Observaciones de la revisión de código

- `Testimonial` no modifica los datos ni selecciona registros: solo presenta
  el objeto `item` que recibe.
- `Controls` no conoce el estado: solo ejecuta los callbacks `onPrev`, `onNext`
  y `onRandom`.
- Los botones usan `type="button"` y texto visible; el estilo
  `button:focus-visible` mantiene el foco visible.
- `.testimonial-card` usa `overflow-wrap: anywhere`, lo que ayuda con textos
  largos (confirmar en P09).

## Traza con tres registros

| Acción | Índice antes | Índice después | Posición visible |
|---|---|---|---|
| Inicio | — | 0 | 1 de 3 |
| Siguiente | 0 | 1 | 2 de 3 |
| Siguiente | 2 | 0 | 1 de 3 |
| Anterior | 0 | 2 | 3 de 3 |
