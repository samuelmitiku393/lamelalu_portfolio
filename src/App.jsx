import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Work from './components/Sections/Work';
import Experience from './components/Sections/Experience';
import Capabilities from './components/Sections/Capabilities';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
