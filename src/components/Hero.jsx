import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import slide1 from "../assets/hero-slides/slide1.jpg";
import slide2 from "../assets/hero-slides/slide2.jpg";
import slide3 from "../assets/hero-slides/slide3.jpeg";
import slide4 from "../assets/hero-slides/slide4.jpg";

const slides = [slide2, slide1, slide3, slide4];

const Hero = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale from 1 to 1.5 as user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Parallax Y movement: Balanced downward movement
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Blur effect: Starts blurring at 40% scroll
  const blur = useTransform(
    scrollYProgress,
    [0.4, 0.85],
    ["blur(0px)", "blur(10px)"]
  );

  // Fade out effect: Starts fading at 40% scroll
  const opacity = useTransform(scrollYProgress, [0.4, 0.85], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="hero" id="home">
      <div className="hero-sticky-wrapper">
        <motion.div
          className="hero-bg-container"
          style={{ scale, height: "100%", width: "100%", position: "absolute" }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="hero-bg"
              style={{
                backgroundImage: `url(${slides[currentSlide]})`,
              }}
            />
          </AnimatePresence>
        </motion.div>

        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content text-center"
          style={{
            opacity: opacity,
            y: y,
            filter: blur,
            color: "var(--white)",
          }}
        >
          <h1 className="hero-title" style={{ color: "var(--white)" }}>
            Discover the Soul of <span className="highlight">Sri Lanka</span>
          </h1>
          <p className="hero-subtitle">
            Experience the perfect blend of ancient culture, pristine nature,
            and unforgettable adventures.
          </p>
          <div className="hero-cta">
            <a href="#tours" className="btn btn-primary">
              Explore Packages <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Plan Custom Trip
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
