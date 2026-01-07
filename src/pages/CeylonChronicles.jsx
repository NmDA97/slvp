import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/CoastalGetaways.css"; // Reuse same styles

// Images
import heroImg from "../assets/packages/chronicles.jpg";
import tourOdyssey from "../assets/chronicles/sl_odyssey.webp";
import tourHeritage from "../assets/chronicles/heritage_trail.jpg";
import tourCultural from "../assets/chronicles/cultural.jpg";

const CeylonChronicles = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const tours = [
    {
      id: 1,
      title: "The Cultural Triangle and Beyond",
      duration: "5 Days",
      subtitle: "Ancient Wonders",
      description:
        "Discover the wonders of Sri Lanka on our five-day tour, 'The Cultural Triangle and Beyond.'",
      image: tourCultural,
      tag: "Heritage",
    },
    {
      id: 2,
      title: "Heritage Trail of Sri Lanka",
      duration: "6 Days",
      subtitle: "History & Tradition",
      description:
        "Immerse Yourself in History, Beauty, and Tradition on this 06-Day Heritage Trail Tour",
      image: tourHeritage,
      tag: "Culture",
    },
    {
      id: 3,
      title: "Sri Lankan Odyssey - Discover Our Mystical Odyssey",
      duration: "14 Days",
      subtitle: "Mystical Odyssey",
      description:
        'Embark on an unforgettable adventure through Sri Lanka\'s diverse landscapes and rich cultural heritage with our "Sri Lankan Odyssey" tour.',
      image: tourOdyssey,
      tag: "Adventure",
    },
  ];

  return (
    <div className="coastal-page">
      <Navbar />

      {/* Modern Premium Hero Section */}
      <section className="coastal-hero">
        {/* Floating Geometric Shapes */}
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>

        {/* Left Content Area */}
        <div className="coastal-hero-content">
          <motion.div
            className="coastal-subtitle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Heritage & Culture
          </motion.div>

          <motion.h1
            className="coastal-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ceylon Chronicles
          </motion.h1>

          <motion.p
            className="coastal-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Journey through Sri Lanka's rich history and cultural heritage.
            Explore ancient UNESCO World Heritage sites, sacred temples, and
            timeless traditions.
          </motion.p>
        </div>

        {/* Right Image Area */}
        <motion.div
          className="coastal-hero-image-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src={heroImg}
            alt="Ceylon Chronicles Hero"
            className="coastal-hero-bg"
            style={{ y }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="coastal-intro">
        <div className="intro-container">
          <motion.div
            className="coastal-breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span>•</span>
            <Link
              to="/"
              state={{ scrollTo: "tours" }}
              className="breadcrumb-link"
            >
              Tours
            </Link>
            <span>•</span>
            <span className="breadcrumb-active">Ceylon Chronicles</span>
          </motion.div>
          <motion.h2
            className="intro-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            DISCOVER THE RICH CULTURE AND EXTENSIVE HISTORY WHILST EXPLORING THE
            EXOTIC BEAUTY OF SRI LANKA
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="intro-text">
              Welcome to our extraordinary Heritage Tour packages by SLVP (Sri
              Lanka Vacation Planners). Immerse yourself in the enchanting world
              of Sri Lanka's rich history and cultural heritage as you explore
              the renowned UNESCO World Heritage sites. From the grandeur of
              Anuradhapura's palaces and sacred temples to the awe-inspiring
              ruins of Polonnaruwa, each step takes you back in time. Ascend the
              iconic Sigiriya Lion Rock, marvel at its breathtaking frescoes,
              and soak in the panoramic views. Discover the spiritual haven of
              Dambulla Cave Temple, a treasure trove of ancient art and
              serenity.
            </p>

            <div
              className={`welcome-collapsible ${isExpanded ? "expanded" : ""}`}
            >
              <p className="intro-text">
                Immerse yourself in the vibrant traditions of Kandy, visit the
                revered Temple of the Tooth, and witness captivating rituals.
                Wander through Galle's well-preserved fortifications, a
                testament to the fusion of European and Asian influences. These
                tours also offer the opportunity to experience the best of Sri
                Lanka's nature, adventure, and stunning beaches. Explore lush
                rainforests, encounter diverse wildlife, and unwind on pristine
                coastlines. Choose your perfect tour package or share your
                suggestions for a customized tour. Join us on this unforgettable
                journey to experience the exotic beauty, rich culture, and
                extensive history of Sri Lanka.
              </p>
            </div>

            {!isExpanded && (
              <button
                className="read-more-btn"
                onClick={() => setIsExpanded(true)}
                style={{ margin: "1rem auto 0" }} // Center button
              >
                Read More...
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Tour List Section */}
      <section className="coastal-list">
        <div className="list-container">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              id={`tour-${tour.id}`}
              className={`coastal-card ${index % 2 === 1 ? "reverse" : ""}`}
              initial={
                index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: index === 0 ? 0 : 0.6,
                delay: index === 0 ? 0 : index * 0.1,
              }}
            >
              {/* Content Column */}
              <div className="card-content">
                <div className="mb-4">
                  <span className="card-tag">{tour.duration}</span>
                </div>
                <h3 className="card-title">{tour.title}</h3>

                {tour.subtitle && (
                  <div className="card-subtitle-row">
                    <span className="card-line"></span>
                    <span className="card-subtitle">{tour.subtitle}</span>
                  </div>
                )}

                <p className="card-desc">{tour.description}</p>

                <button className="btn-card">
                  <span className="icon-circle">
                    <ArrowRight size={16} />
                  </span>
                  Find out more about this tour
                </button>
              </div>

              {/* Image Column */}
              <div className="card-image-wrapper">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="card-image"
                  loading="eager"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CeylonChronicles;
