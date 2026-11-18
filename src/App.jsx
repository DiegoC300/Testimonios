import { useState } from 'react';
import testimonios from './data.js';
import Testimonial from './components/Testimonial.jsx';
import Controls from './components/Controls.jsx';

export default function App() {
  // Estado para el índice actual
  const [index, setIndex] = useState(0);
  const total = testimonios.length;

  // Funciones de navegación
  function next() {
    setIndex(actual => (actual + 1) % total);
  }

  function prev() {
    setIndex(actual => (actual - 1 + total) % total);
  }

  function random() {
    if (total < 2) return;
    const salto = 1 + Math.floor(Math.random() * (total - 1));
    setIndex(actual => (actual + salto) % total);
  }

  // Si no hay testimonios, mostramos un mensaje
  if (total === 0) {
    return (
      <main className="app">
        <h1>Experiencias de nuestros usuarios</h1>
        <p>No hay testimonios disponibles.</p>
      </main>
    );
  }

  // Renderizado principal
  return (
    <main className="app">
      <h1>Experiencias de nuestros usuarios</h1>
      
      {/* La tarjeta recibe el testimonio según el índice actual */}
      <Testimonial item={testimonios[index]} />
      
      {/* Los controles reciben las funciones a ejecutar */}
      <Controls onPrev={prev} onNext={next} onRandom={random} />
      
      {/* El contador que anuncia el cambio para accesibilidad */}
      <p className="counter" aria-live="polite">
        Testimonio {index + 1} de {total}
      </p>
    </main>
  );
}