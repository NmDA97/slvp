import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import FounderMessage from "./components/FounderMessage";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main>
        <About />
        <WhyUs />
        <FounderMessage />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
