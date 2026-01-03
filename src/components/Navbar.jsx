import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, Globe, Phone } from "lucide-react";
import logo from "../assets/slvplogo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation to section (from home or other pages)
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Handle scroll to section after navigation from another page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

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

  // Define nav items
  const allNavItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "offer", label: "What we offer" },
    { id: "why-us", label: "Why SLVP?" },
    { id: "tours", label: "Tours" },
    { id: "volunteer", label: "Volunteer" },
    { id: "contact", label: "Contact us" },
  ];

  // Filter items based on location
  const navItems =
    location.pathname === "/"
      ? allNavItems
      : allNavItems.filter((item) =>
          ["home", "tours", "volunteer", "contact"].includes(item.id)
        );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick("home", e)}
        >
          <img src={logo} alt="SLVP" className="logo-img" />
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <button className="mobile-close" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => handleNavClick(item.id, e)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
