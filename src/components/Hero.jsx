import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import slide1 from "../assets/hero-slides/slide1.jpg";
import slide2 from "../assets/hero-slides/slide2.jpg";
import slide3 from "../assets/hero-slides/slide3.jpeg";

const slides = [slide1, slide2, slide3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content text-center">
        <h1 className="hero-title">
          Discover the Soul of <span className="highlight">Sri Lanka</span>
        </h1>
        <p className="hero-subtitle">
          Experience the perfect blend of ancient culture, pristine nature, and
          unforgettable adventures.
        </p>
        <div className="hero-cta">
          <a href="#tours" className="btn btn-primary">
            Explore Packages <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Plan Custom Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
