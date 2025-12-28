import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone } from "lucide-react";
import logo from "../assets/slvplogo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src={logo} alt="SLVP" className="logo-img" />
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#tours" onClick={() => setIsOpen(false)}>
            Data Tour
          </a>
          <a href="#volunteer" onClick={() => setIsOpen(false)}>
            Volunteer
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
          >
            Plan My Trip
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
