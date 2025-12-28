import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/slvplogo3.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" className="footer-logo-link">
              <img
                src={logo}
                alt="SLVP"
                className="logo-img mb-4"
                style={{ height: "70px" }}
              />
            </a>
            <p className="footer-desc">
              Sri Lanka Vacation Planner is your trusted partner for authentic
              travel experiences and meaningful volunteer programs in Sri Lanka.
            </p>
            <div className="social-links">
              <a href="#">
                <Facebook size={20} />
              </a>
              <a href="#">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#volunteer">Volunteer Programs</a>
              </li>
              <li>
                <a href="#blog">Travel Blog</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Popular Tours</h3>
            <ul>
              <li>
                <a href="#coastal">Coastal Getaways</a>
              </li>
              <li>
                <a href="#wildlife">Wildlife Safaris</a>
              </li>
              <li>
                <a href="#heritage">Cultural Heritage</a>
              </li>
              <li>
                <a href="#combo">Combo Packages</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} /> Kurunegala, Sri Lanka
              </li>
              <li>
                <Phone size={18} /> +94 77 123 4567
              </li>
              <li>
                <Mail size={18} /> info@slvp.travel
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} SLVP Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
