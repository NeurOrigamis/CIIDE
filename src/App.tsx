import Header from './components/Header';
import Hero from './components/Hero';
import InstitutionalVision from './components/InstitutionalVision';
import StrategicAreas from './components/StrategicAreas';
import Services from './components/Services';
import ModeloCIIDE from './components/ModeloCIIDE';
import Results from './components/Results';
import Alliances from './components/Alliances';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <InstitutionalVision />
        <StrategicAreas />
        <Services />
        <ModeloCIIDE />
        <Results />
        <Alliances />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
