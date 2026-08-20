import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import FlatsSection from '../components/flatsSection/FlatsSection';
import { AgentsSection } from '../components/agents/organisms/AgentsSection';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <FlatsSection limit={4} />
      <AgentsSection />
    </>
  );
}

export default Home;
