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
import CeylonChronicles from "./pages/CeylonChronicles";
import VolunteerWork from "./pages/VolunteerWork";
import VolunteerWildlife from "./pages/VolunteerWildlife";
import VolunteerCombined from "./pages/VolunteerCombined"; // Import new page

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
        <Route path="/ceylon-chronicles" element={<CeylonChronicles />} />
        <Route path="/volunteer-work" element={<VolunteerWork />} />
        <Route path="/volunteer-wildlife" element={<VolunteerWildlife />} />
        <Route
          path="/volunteer-combined"
          element={<VolunteerCombined />}
        />{" "}
        {/* New route */}
      </Routes>
    </div>
  );
}

export default App;
