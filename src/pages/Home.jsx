import { PropertySearchBar } from "../components/search/organisms/PropertySearchBar";
import About from "../components/About/About";
import { AgentsSection } from "../components/agents/organisms/AgentsSection";
import Hero from "../components/hero/Hero";
import FlatsSection from "../components/FlatsSection/FlatsSection";

function Home() {
  return (
    <>
      <Hero />
      {/* <PropertySearchBar /> */}
      <About />
      <FlatsSection />
      <AgentsSection />
    </>
  );
}

export default Home;
