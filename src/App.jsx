import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import FounderMessage from "./components/FounderMessage";
import Packages from "./components/Packages";
import Volunteer from "./components/Volunteer";
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
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
