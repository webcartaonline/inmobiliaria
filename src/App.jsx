import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Flats from "./pages/Flats";

function App() {
  return (
    <div className="appContainer">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pisos" element={<Flats />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;