import "./styles/App.css";
import { PropertySearchBar } from "./components/search/organisms/PropertySearchBar";
import About from "./components/About/About";
import { AgentsSection } from "./components/agents/organisms/AgentsSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="appContainer">
      <Header />

      <main>
        <Hero />
        <PropertySearchBar />
        <About />
        <AgentsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
