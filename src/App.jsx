import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import FounderMessage from "./components/FounderMessage";
import Packages from "./components/Packages";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import CoastalGetaways from "./pages/CoastalGetaways";
import WildlifeNature from "./pages/WildlifeNature";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/coastal-getaways" element={<CoastalGetaways />} />
        <Route path="/wildlife-nature" element={<WildlifeNature />} />
      </Routes>
    </div>
  );
}

export default App;
