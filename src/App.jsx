import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <Hero />

        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
