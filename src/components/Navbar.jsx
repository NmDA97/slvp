import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import logo from "../assets/slvplogo3.png";
import "./NavbarDropdown.css"; // Import dropdown styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeDropdown, setActiveDropdown] = useState(null); // For mobile menu
  const [activeSubmenu, setActiveSubmenu] = useState(null); // For mobile submenu
  const location = useLocation();
  const navigate = useNavigate();

  // Tour Data Structure
  const tourStructure = [
    {
      title: "Coastal Getaways",
      path: "/coastal-getaways",
      tours: [
        { id: 2, title: "Serene Shores (7 Days)" },
        { id: 4, title: "Sandy Serenity (10 Days)" },
        { id: 3, title: "Sri Lankan Odyssey (14 Days)" },
        { id: 1, title: "Beach Bliss (16 Days)" },
      ],
    },
    {
      title: "Wildlife & Nature",
      path: "/wildlife-nature",
      tours: [
        { id: 2, title: "Essential Sri Lanka (7 Days)" },
        { id: 5, title: "Winged Odyssey (10 Days)" },
        { id: 1, title: "Discover Sri Lanka (11 Days)" },
        { id: 3, title: "Sri Lankan Odyssey (14 Days)" },
        { id: 4, title: "Ultimate Nature Trail (21 Days)" },
      ],
    },
    {
      title: "Ceylon Chronicles",
      path: "/ceylon-chronicles",
      tours: [
        { id: 1, title: "The Cultural Triangle (5 Days)" },
        { id: 2, title: "Heritage Trail (6 Days)" },
        { id: 3, title: "Sri Lankan Odyssey (14 Days)" },
      ],
    },
  ];

  // Handle navigation to section (from home or other pages)
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);

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

  // Handle Tour Navigation
  const handleTourClick = (path, tourId) => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
    navigate(path);

    // If tourId is present, scroll to it after navigation
    if (tourId) {
      setTimeout(() => {
        const element = document.getElementById(`tour-${tourId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300); // Small delay to ensuring page loads
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
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
    { id: "tours", label: "Tours", isDropdown: true }, // Mark as dropdown
    { id: "volunteer", label: "Volunteer", path: "/volunteer-work" },
    { id: "contact", label: "Contact us" },
  ];

  // Filter items based on location
  const navItems =
    location.pathname === "/"
      ? allNavItems
      : allNavItems.filter((item) =>
          ["home", "tours", "volunteer", "contact"].includes(item.id)
        );

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === "tours" ? null : "tours");
  };

  const toggleSubmenu = (e, title) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

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

          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div
                  key={item.id}
                  className={`nav-item-dropdown ${
                    activeDropdown === "tours" ? "active" : ""
                  }`}
                >
                  <a
                    href="#tours"
                    className={activeSection === item.id ? "active" : ""}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        toggleDropdown(e);
                      } else {
                        handleNavClick("tours", e);
                      }
                    }}
                  >
                    {item.label}{" "}
                    <ChevronDown size={14} style={{ marginLeft: 4 }} />
                  </a>

                  <div className="dropdown-menu">
                    {tourStructure.map((pkg) => (
                      <div
                        key={pkg.title}
                        className={`dropdown-item-wrapper ${
                          activeSubmenu === pkg.title ? "active" : ""
                        }`}
                      >
                        <div
                          className="dropdown-item"
                          onClick={(e) => {
                            if (window.innerWidth <= 768) {
                              toggleSubmenu(e, pkg.title);
                            } else {
                              handleTourClick(pkg.path);
                            }
                          }}
                        >
                          <span>{pkg.title}</span>
                          <ChevronRight size={16} className="chevron-right" />
                        </div>

                        {/* Nested Submenu */}
                        <div className="dropdown-submenu">
                          {pkg.tours.map((tour) => (
                            <div
                              key={tour.id}
                              className="submenu-item"
                              onClick={() => handleTourClick(pkg.path, tour.id)}
                            >
                              {tour.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.id}
                href={item.path || `#${item.id}`}
                className={
                  activeSection === item.id ||
                  (item.path && location.pathname === item.path)
                    ? "active"
                    : ""
                }
                onClick={(e) => {
                  if (item.path) {
                    e.preventDefault();
                    navigate(item.path);
                    setIsOpen(false);
                  } else {
                    handleNavClick(item.id, e);
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
