
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Agents from "./pages/Agents";
import History from "./pages/History";
import Flats from "./pages/Flats";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="appContainer">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/history" element={<History />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
