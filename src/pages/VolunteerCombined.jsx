import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/VolunteerWork.css"; // Reusing the same CSS

import heroImg from "../assets/volunteer/combined.png"; // Placeholder
import imgEleChild from "../assets/volunteer/elephan_care.avif"; // Using Elephant image
import imgTurtleChild from "../assets/volunteer/Turtle.jpg"; // Using Turtle image
import imgEleTurtle from "../assets/volunteer/combined_image.jpg"; // New combined image

const VolunteerCombined = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 0]); // Disabled parallax to prevent flash

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const programs = [
    {
      id: 1,
      title: "Work With Children and Care for Elephants",
      location: "Kegalle & Balapitiya, Sri Lanka",
      description:
        "This unique program combines two impactful initiatives, allowing you to contribute meaningfully to both causes. Work closely with children in various settings, offering educational activities, recreational programs, mentorship, and emotional support. Witness firsthand the profound difference you can make in their lives.",
      included: "Care for Domesticated Elephants + Work with Children",
      image: imgEleChild,
    },
    {
      id: 2,
      title: "Work With Children and Turtle Conservation",
      location: "Galle, Sri Lanka",
      description:
        "Welcome to the Working with Children Volunteer Program and the Turtle Conservation Volunteer Program, both extraordinary opportunities provided by the SLVP team! These programs offer compassionate individuals the chance to make a positive impact on the lives of children and sea turtles in Sri Lanka. By participating in these programs, volunteers will engage in meaningful activities, immerse themselves in the local culture, and contribute to the preservation of these magnificent creatures.",
      included: "Turtle Conservation Project + Work with Children",
      image: imgTurtleChild,
    },
    {
      id: 3,
      title: "Elephants and Turtle Conservation Project",
      location: "Galle & Kegalle, Sri Lanka",
      description:
        "This hands-on program allows volunteers to engage in caring for elephants by learning about their behavior, feeding, bathing, and supporting their welfare. Additionally, volunteers actively participate in turtle conservation efforts by protecting nesting sites, releasing hatchlings, and raising awareness. Alongside conservation work, volunteers will immerse themselves in Sri Lankan cultural heritage, exploring local communities and indulging in traditional cuisine. This transformative program combines conservation, cultural immersion, and personal growth, allowing volunteers to leave a positive impact on the world while experiencing the beauty of Sri Lanka.",
      included: "Turtle Conservation Project + Care for Domesticated Elephants",
      image: imgEleTurtle,
    },
  ];

  return (
    <div className="volunteer-page">
      <Navbar />

      {/* Hero Section */}
      <section className="volunteer-hero">
        <motion.img
          src={heroImg}
          alt="Combined Projects Hero"
          className="volunteer-hero-bg"
          style={{ y }}
          initial={{ y: 0 }}
          loading="eager"
        />
        <div className="volunteer-hero-overlay"></div>

        <div className="volunteer-hero-content">
          <motion.h1
            className="volunteer-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            COMBINED PROJECTS
          </motion.h1>
          <motion.p
            className="volunteer-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Help support multiple volunteer projects
          </motion.p>
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
      <section className="volunteer-intro">
        <div className="intro-container">
          <motion.div
            className="volunteer-breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span>•</span>
            <span className="breadcrumb-active">Combined Projects</span>
          </motion.div>

          {/* Logo was removed in previous request to maintain consistency, so omitting here too */}

          <motion.h2
            className="intro-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            COMBINED PROJECTS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="intro-text">
              Volunteer in Sri Lanka with SLVP - Sri Lanka Volunteer Program
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program List Section */}
      <section className="volunteer-list">
        <div className="list-container">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={`program-${program.id}`}
              className={`volunteer-card ${index % 2 === 1 ? "reverse" : ""}`}
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
                  {/* Reuse subtitle style for Location if needed, or just regular text */}
                  {program.location && (
                    <span className="card-tag">{program.location}</span>
                  )}
                </div>
                <h3 className="card-title">{program.title}</h3>

                {program.included && (
                  <div className="card-subtitle-row">
                    <span className="card-line"></span>
                    <span className="card-subtitle">{program.included}</span>
                  </div>
                )}

                <p className="card-desc">{program.description}</p>

                <button className="btn-card">
                  <span className="icon-circle">
                    <ArrowRight size={16} />
                  </span>
                  View Info About This Program
                </button>
              </div>

              {/* Image Column */}
              <div className="card-image-wrapper">
                <img
                  src={program.image}
                  alt={program.title}
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

export default VolunteerCombined;
