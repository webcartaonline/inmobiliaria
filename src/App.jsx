
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
// Componentes fijos (comunes a todas las páginas)
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Vistas completas desde la carpeta src/pages/
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import History from "./pages/History";
import Flats from "./pages/Flats";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="appContainer">
      {/* El Header estará visible en TODAS las páginas */}
      <Header />

      {/* Dentro de <main> cambia la habitación según la URL */}
      <main>
        <Routes>
          {/* Ruta principal (Inicio): aquí vive la Landing actual con Hero, About, etc. */}
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/history" element={<History />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </main>

      {/* El Footer estará visible en TODAS las páginas */}
      <Footer />
    </div>
  );
}

export default App;
