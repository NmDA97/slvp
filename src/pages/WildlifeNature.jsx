import React, { useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/CoastalGetaways.css"; // Reuse same styles

import heroImg from "../assets/packages/wildlife.jpg";
import tour1 from "../assets/wildlife/discover.jpg";
import tour2 from "../assets/wildlife/essential.jpg";
import tour3 from "../assets/wildlife/odyssey_w.jpg";
import tour4 from "../assets/wildlife/nature.jpg";
import tour5 from "../assets/wildlife/winged.jpg";

const WildlifeNature = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const tours = [
    {
      id: 1,
      title: "Discover Sri Lanka - Your Island Paradise",
      duration: "11 Days",
      subtitle: "Island Paradise",
      description:
        "“Discover Sri Lanka in 10 breathtaking days of beauty to showcase what Sri Lanka has to offer”",
      image: tour1,
      tag: "Nature",
    },
    {
      id: 2,
      title: "Essential Sri Lanka - Discover the soul of Sri Lanka.",
      duration: "7 Days",
      subtitle: "Soul of Sri Lanka",
      description:
        'Experience the essence of Sri Lanka in just 7 days with our "Essential Sri Lanka" tour, packed with cultural, historical and scenic highlights that will leave you mesmerized.',
      image: tour2,
      tag: "Culture",
    },
    {
      id: 3,
      title: "Sri Lankan Odyssey - Discover Our Mystical Odyssey",
      duration: "14 Days",
      subtitle: "Mystical Odyssey",
      description:
        'Embark on an unforgettable adventure through Sri Lanka\'s diverse landscapes and rich cultural heritage with our "Sri Lankan Odyssey" tour.',
      image: tour3,
      tag: "Adventure",
    },
    {
      id: 4,
      title: "The Ultimate Nature Trail - Meet the serenity of the wild",
      duration: "21 Days",
      subtitle: "Serenity of the Wild",
      description:
        "Immerse yourself in Sri Lanka's breathtaking natural beauty on our \"Ultimate Nature Trail\" tour, where you'll discover stunning landscapes, diverse wildlife and tranquil hideaways",
      image: tour4,
      tag: "Wildlife",
    },
    {
      id: 5,
      title: "Winged Odyssey - uncover the stunning avifauna of Sri Lanka",
      duration: "10 Days",
      subtitle: "Bird Lover's Dream",
      description:
        "Explore the exotic birdlife of Sri Lanka with our \"Winged Odyssey\" tour, a 10-day journey that takes you through the country's stunning landscapes and diverse habitats, A bird lover's dream tour.",
      image: tour5,
      tag: "Birding",
    },
  ];

  return (
    <div className="coastal-page">
      <Navbar />

      {/* Hero Section */}
      <section className="coastal-hero">
        <motion.img
          src={heroImg}
          alt="Wildlife Hero"
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
            Wildlife & Nature Paradise Tours
          </motion.h1>
          <motion.div
            className="coastal-breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>Home</span>
            <span>•</span>
            <span className="breadcrumb-active">Wildlife & Nature</span>
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
            EXPERIENCE THE UNTAMED BEAUTY OF SRI LANKA WITH WILDLIFE & NATURE
            PARADISE TOURS
          </motion.h2>
          <motion.p
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to the world of Wildlife & Nature Paradise Tours, where you
            can embark on a captivating journey through the enchanting
            landscapes of Sri Lanka. Prepare to be mesmerized by the
            breathtaking beauty of lush rainforests, misty mountains, and
            vibrant national parks. Immerse yourself in the wonders of the
            island's wildlife as you encounter majestic elephants, elusive
            leopards, and a kaleidoscope of colorful birdlife. Our commitment to
            responsible tourism ensures that your experience not only connects
            you with nature but also contributes to the conservation efforts of
            the local ecosystem.
            <br />
            <br />
            But that's not all! Our tour packages go beyond wildlife
            exploration. They also offer opportunities to delve into the rich
            heritage, culture, and traditions of Sri Lanka. Discover ancient
            temples, magnificent palaces, and UNESCO World Heritage sites that
            showcase the island's fascinating history. And when it's time to
            relax, indulge in the serene beauty of Sri Lanka's pristine beaches.
            <br />
            <br />
            Choose the tour that best matches your interests, or share your
            thoughts with us, and we'll create a customized itinerary
            exclusively for you. Join us on this extraordinary journey to
            uncover the secrets of Sri Lanka's rich biodiversity, experience its
            vibrant culture, and immerse yourself in the true paradise of
            wildlife and natural beauty.
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

export default WildlifeNature;
