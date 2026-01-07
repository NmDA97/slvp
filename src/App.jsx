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
import { Suspense, lazy } from "react";

// Lazy Load Pages to reduce initial bundle size
const CoastalGetaways = lazy(() => import("./pages/CoastalGetaways"));
const WildlifeNature = lazy(() => import("./pages/WildlifeNature"));
const CeylonChronicles = lazy(() => import("./pages/CeylonChronicles"));
const VolunteerWork = lazy(() => import("./pages/VolunteerWork"));
const VolunteerWildlife = lazy(() => import("./pages/VolunteerWildlife"));
const VolunteerCombined = lazy(() => import("./pages/VolunteerCombined"));

// Loading Component
const Loading = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
      color: "#fff",
    }}
  >
    Loading...
  </div>
);

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}

export default App;
