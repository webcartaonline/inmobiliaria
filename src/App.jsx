import React from 'react';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Contenido principal de tu página web */}
      <main style={{ minHeight: '80vh', padding: '20px', color: '#333' }}>
        {/* Aquí irán tus componentes de la web (Navbar, Tarjetas de pisos, etc.) */}
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
