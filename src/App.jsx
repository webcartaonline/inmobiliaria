import "./styles/App.css";
import { PropertySearchBar } from "./components/search/organisms/PropertySearchBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PisoCard from './components/cardFlats';
import images from './utils/images';

function App() {
  return (
    <div className="appContainer">
      <Header />

      <main>
        <Hero />
        <PropertySearchBar />
        <About />
        <div className="cardsContainer">
            <PisoCard
                image={images['window.png']}
                price="450€/MES"
                title="Piso en el Realejo"
                distance="a 8 min del centro"
                services={['WiFi 1GB', 'Climatizado']}
            />
            <PisoCard
                image={images['groound.png']}
                price="500€/MES"
                title="Piso en Paseo de las flores"
                distance="a 15 min del centro"
                services={['WiFi 1GB', 'Climatizado', 'Piscina']}
            />
            <PisoCard
                image={images['pentHouse.png']}
                price="800€/MES"
                title="Piso en Plaza Cristo Rey"
                distance="En el centro"
                services={['WiFi 1GB', 'Climatizado', 'Terraza']}
            />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;