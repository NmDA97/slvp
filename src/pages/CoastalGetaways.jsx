import React, { useEffect } from "react";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/CoastalGetaways.css"; // Import styles

import beachHero from "../assets/hero-slides/slide1.jpg";
import tour1 from "../assets/coastal/beachbliss.png";
import tour2 from "../assets/coastal/serene.jpg";
import tour3 from "../assets/coastal/odyssey.jpg";
import tour4 from "../assets/coastal/sandyserenity.jpeg";

const CoastalGetaways = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const tours = [
    {
      id: 1,
      title: "Beach Bliss: Discovering Sri Lanka's Best Beaches",
      duration: "16 Days",
      subtitle: "Unwind and Rejuvenate",
      description:
        "“Unwind and rejuvenate on Sri Lanka's stunning coastlines - 3 beaches, 8 nights of blissful relaxation and adventure!”",
      image: tour1,
      tag: "Relaxation",
    },
    {
      id: 2,
      title: "Serene Shores and Thrilling Trails: A Beach and Adventure Tour",
      duration: "7 Days",
      subtitle: "Adventure Meets Relaxation",
      description:
        'Experience the Ultimate Sri Lankan Beach Getaway: 7 Nights on 3 Beaches. Trekking, White Water Rafting, and More!"',
      image: tour2,
      tag: "Adventure",
    },
    {
      id: 3,
      title: "Sri Lankan Odyssey - Discover Our Mystical Odyssey",
      duration: "14 Days",
      subtitle: "Cultural Deep Dive",
      description:
        'Embark on an unforgettable adventure through Sri Lanka\'s diverse landscapes and rich cultural heritage with our "Sri Lankan Odyssey" tour.',
      image: tour3,
      tag: "Culture",
    },
    {
      id: 4,
      title: "Sandy Serenity: A Beach and Culture Tour of Sri Lanka",
      duration: "10 Days",
      subtitle: "Sun, Sand & Culture",
      description:
        "Indulge in Sri Lanka's Beach Paradise: 10 Days of Sun, Sand, and Culture!",
      image: tour4,
      tag: "Combo",
    },
  ];

  return (
    <div className="coastal-page">
      <Navbar />

      {/* Hero Section */}
      <section className="coastal-hero">
        <motion.img
          src={beachHero}
          alt="Coastal Hero"
          className="coastal-hero-bg"
          style={{ y }}
        />
        <div className="coastal-hero-overlay"></div>

        <div className="coastal-hero-content">
          <motion.h1
            className="coastal-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Coastal Getaways
          </motion.h1>
          <motion.div
            className="coastal-breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>Home</span>
            <span>•</span>
            <span className="breadcrumb-active">Coastal Getaways</span>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="coastal-intro">
        <div className="intro-container">
          <motion.h2
            className="intro-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore Sri Lanka's stunning coastline with our expert guides
          </motion.h2>
          <motion.p
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to the Coastal Getaways offered by SLVP, where we invite you
            to embark on unforgettable beach holidays. Indulge in a perfect
            blend of exploration and relaxation as you discover the best
            attractions of Sri Lanka while immersing yourself in the tranquility
            of its stunning beaches. Our tours go beyond the ordinary, placing a
            special emphasis on providing you with unforgettable beach
            experiences. Picture yourself basking in the warm sun on golden
            sands, feeling the gentle breeze caress your skin, and listening to
            the soothing rhythm of the waves. From secluded coves to vibrant
            beachfronts, our Coastal Getaways take you to the most picturesque
            beaches in Sri Lanka, where you can unwind, rejuvenate, and create
            cherished memories. Let SLVP guide you to these idyllic coastal
            destinations, where the magic of beach holidays awaits.
          </motion.p>
        </div>
      </section>

      {/* Tour List Section */}
      <section className="coastal-list">
        <div className="list-container">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={`coastal-card ${index % 2 === 1 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <img src={tour.image} alt={tour.title} className="card-image" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoastalGetaways;
