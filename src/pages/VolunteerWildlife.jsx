import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/VolunteerWork.css"; // Reusing the same CSS

import heroImg from "../assets/volunteer/wildlife.jpg";
import imgTurtle from "../assets/volunteer/Turtle.jpg";
import imgElephant from "../assets/volunteer/elephan_care.avif";

const VolunteerWildlife = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 0]); // Disabled parallax to prevent flash

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const programs = [
    {
      id: 1,
      title: "Turtle Conservation Project",
      duration: "1 – 4 Weeks",
      subtitle:
        "Male & Female - 18+ • Onsite Accommodation with A/C • Flexible Dates • All Inclusive",
      description:
        "The Turtle Conservation Project is an opportunity to work with one of the most incredible creatures on the planet and make a meaningful contribution to their conservation. The project is located in two stunning locations in Sri Lanka, Galle and Balapitiya, where volunteers will work with local experts to protect the turtle population.",
      location: "Balapitiya, Sri Lanka",
      image: imgTurtle,
      tag: "Conservation",
    },
    {
      id: 2,
      title: "Care for Domesticated Elephants",
      duration: "1 – 4 Weeks",
      subtitle:
        "Male & Female - 18+ • Onsite Accommodation • Flexible Dates • All Inclusive",
      description:
        "By participating in this program, you have the chance to make a meaningful contribution to the welfare and conservation of domesticated elephants in Sri Lanka. As you embark on this journey, you will not only engage in hands-on activities related to elephant care but also gain a profound understanding of the significance and the role that elephants play in Sri Lankan culture.",
      location: "Kegalle, Sri Lanka",
      image: imgElephant,
      tag: "Welfare",
    },
  ];

  return (
    <div className="volunteer-page">
      <Navbar />

      {/* Hero Section */}
      <section className="volunteer-hero">
        <motion.img
          src={heroImg}
          alt="Wildlife Conservation Hero"
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
            VOLUNTEER & TAKE PART IN WILDLIFE CONSERVATION
          </motion.h1>
          <motion.p
            className="volunteer-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience Sri Lanka Your Way
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

      {/* Intro Section - Without Logo per previous feedback context, or maybe keep it consistent? 
          The user removed it from the other page. The image shows it, but user *just* asked to remove it.
          I will omit the logo motion div to be safe and consistent with the "remove logo" request for the other page.
      */}
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
            <span className="breadcrumb-active">Wildlife Conservation</span>
          </motion.div>

          <motion.h2
            className="intro-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            VOLUNTEER PROGRAMS
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
                  <span className="card-tag">{program.duration}</span>
                </div>
                <h3 className="card-title">{program.title}</h3>

                {program.subtitle && (
                  <div className="card-subtitle-row">
                    <span className="card-line"></span>
                    <span className="card-subtitle">{program.subtitle}</span>
                  </div>
                )}

                <p className="card-desc">{program.description}</p>

                {program.location && (
                  <p
                    className="card-desc"
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      color: "var(--primary-color)",
                    }}
                  >
                    Locations: {program.location}
                  </p>
                )}

                <button className="btn-card">
                  <span className="icon-circle">
                    <ArrowRight size={16} />
                  </span>
                  Learn more
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

export default VolunteerWildlife;
