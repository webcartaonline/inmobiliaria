import "./styles/App.css";
import { PropertySearchBar } from "./components/search/organisms/PropertySearchBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PisoCard from "./components/cardFlats/cardFlats";
import flats from './data/dataFlats';

function App() {
  return (
    <div className="appContainer">
      <Header />

      <main>
        <Hero />
        <PropertySearchBar />
        <About />

        <h2 className="cardFlatsTittle">ESTOS PISOS TE PUEDEN INTERESAR</h2>
        <div className="cardsContainer">
            {flats.map((flat) => (
                <PisoCard key={flat.id} {...flat} />
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;