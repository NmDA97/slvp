import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/VolunteerWork.css";

import heroImg from "../assets/volunteer/child.png"; // Using child.png for hero
import imgGirlsHome from "../assets/volunteer/child.png";
import imgSpecialNeeds from "../assets/volunteer/combined.png";
import imgAesthetic from "../assets/volunteer/child.png"; // Reusing for now
import imgCricket from "../assets/volunteer/wildlife.jpg"; // Placeholder
import imgSports from "../assets/volunteer/wildlife.jpg"; // Placeholder

const VolunteerWork = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 0]); // Disabled parallax to prevent flash

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const programs = [
    {
      id: 1,
      title: "Volunteer in Sri Lanka at a Girls' Home",
      duration: "2 – 12 Weeks",
      subtitle: "Internship Accepted • Flexible Dates • All Inclusive",
      description:
        "The program is designed to create a warm and nurturing environment while teaching simple skills that inspire confidence. Volunteers help to improve English communication, assist with homework, and engage in fun activities that bring joy to the children's daily lives.",
      image: imgGirlsHome,
      tag: "Community",
    },
    {
      id: 2,
      title: "Special Needs Children Volunteer",
      duration: "2 – 12 Weeks",
      subtitle: "18+ • Internship Accepted • Flexible Dates • All Inclusive.",
      description:
        "This volunteer program provides volunteers with an opportunity to work with children with special needs in an orphanage. The program includes a range of activities such as teaching, mentoring, and providing the necessary support to help these children grow and feel valued.",
      image: imgSpecialNeeds,
      tag: "Care",
    },
    {
      id: 3,
      title: "Western Music, Painting, and Other Aesthetic Skills",
      duration: "2 – 12 Weeks",
      subtitle: "18+ • Internship Accepted • Flexible Dates • All Inclusive.",
      description:
        "The volunteer program offers an exciting opportunity for volunteers to teach Western Music, painting, and other aesthetic skills. Volunteers can organize workshops and classes that allow children to express themselves creatively and discover new talents.",
      image: imgAesthetic,
      tag: "Arts",
    },
    {
      id: 4,
      title: "Coaching Cricket in Local Schools",
      duration: "2 – 12 Weeks",
      subtitle:
        "Male - 18+ • Internship Accepted • Flexible Dates • All Inclusive.",
      description:
        "This is an amazing program where aspiring cricket players can train with local talent. Volunteers share their knowledge and passion for the game, helping to develop the skills of young players while experiencing the local cricket culture firsthand.",
      image: imgCricket,
      tag: "Sports",
    },
    {
      id: 5,
      title: "Sports Coaching in Local Schools",
      duration: "2 – 12 Weeks",
      subtitle:
        "Male & Female - 18+ • Internship Accepted • Flexible Dates • All Inclusive..",
      description:
        "The Sports Coaching program focuses on improving physical wellbeing and teamwork among students. Volunteers organize sports activities, physical education classes, and fun games that encourage active participation and a healthy lifestyle.",
      image: imgSports,
      tag: "Sports",
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="volunteer-page">
      <Navbar />

      {/* Hero Section */}
      <section className="volunteer-hero">
        <motion.img
          src={heroImg}
          alt="Volunteer Hero"
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
            VOLUNTEER & WORK WITH CHILDREN
          </motion.h1>
          <motion.p
            className="volunteer-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Make a difference today!
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
            <span className="breadcrumb-active">Volunteer Programs</span>
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
              At SLVP, we believe in the power of giving back. Our volunteer
              programs provide meaningful opportunities to engage with local
              communities and make a positive impact on the lives of children.
            </p>

            <div
              className={`welcome-collapsible ${isExpanded ? "expanded" : ""}`}
            >
              <p className="intro-text">
                Whether you are passionate about education, sports, or the arts,
                we have a program that aligns with your interests. Join us in
                creating a brighter future for the next generation while
                experiencing the warmth and hospitality of Sri Lanka.
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

export default VolunteerWork;
