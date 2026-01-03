import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone } from "lucide-react";
import logo from "../assets/slvplogo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "offer",
        "volunteer",
        "why-us",
        "tours",
        "contact",
      ];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <img src={logo} alt="SLVP" className="logo-img" />
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <button className="mobile-close" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#offer"
            className={activeSection === "offer" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            What we offer
          </a>
          <a
            href="#why-us"
            className={activeSection === "why-us" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Why SLVP?
          </a>
          <a
            href="#tours"
            className={activeSection === "tours" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Tours
          </a>
          <a
            href="#volunteer"
            className={activeSection === "volunteer" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Volunteer
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
