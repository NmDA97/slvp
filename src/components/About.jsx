import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import slide1 from "../assets/hero-slides/slide1.jpg";
import slide2 from "../assets/hero-slides/slide2.jpg";
import slide3 from "../assets/hero-slides/slide3.jpeg";
import logoSmall from "../assets/logosmall.png";
import tourGuideImg from "../assets/offer-images/guided-tour.jpg";
import volunteerImg from "../assets/offer-images/volunteer.jpg";
import comboImg from "../assets/offer-images/combo.jpg";

// Animation Variants - Apple Style Subtle Reveal
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth snap
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <section id="about" className="section-about pt-5 pb-0">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-content">
              <div className="section-title text-start mb-4">
                <h2>Welcome to SLVP</h2>
                <h4 className="welcome-subtitle">
                  Experience the best of Sri Lanka, Find the best of you!
                </h4>
              </div>
              <p className="welcome-text">
                We're a Sri Lanka-based travel company offering tourism
                opportunities for all types of travelers, whether you're a
                luxury or budget traveler. We specialize in providing authentic
                and all-inclusive Sri Lankan experiences that will give your
                life new meaning.
              </p>

              <div
                className={`welcome-collapsible ${
                  isExpanded ? "expanded" : ""
                }`}
              >
                <p className="welcome-text">
                  Our tour plans are tailored to suit your aspirations, from
                  adventurous backpacking trips to relaxing family vacations.
                  Explore the lush green forests, pristine beaches, and
                  awe-inspiring mountains of Sri Lanka while immersing yourself
                  in the country's rich cultural heritage. At SLVP, we believe
                  in responsible tourism and offer opportunities for guided
                  tours and volunteering to make a positive impact in local
                  communities.
                </p>
                <p className="welcome-text">
                  Spend your holiday meaningfully and support those in need
                  while discovering the true beauty and hospitality of Sri
                  Lanka. Our team of expert travel consultants is here to help
                  you plan the best Sri Lankan tour package for your dream
                  holiday. Book with SLVP and create memories that will last a
                  lifetime.
                </p>
              </div>

              {!isExpanded && (
                <button
                  className="read-more-btn"
                  onClick={() => setIsExpanded(true)}
                >
                  Read More...
                </button>
              )}
            </div>
            <div className="welcome-collage">
              {/* Animation for collage: Slide in from right staggered? Or kept simple */}
              <div className="collage-column col-1">
                <motion.div
                  className="collage-item item-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                >
                  <img src={slide1} alt="Sri Lanka Nature" />
                </motion.div>
              </div>
              <div className="collage-column col-2">
                <motion.div
                  className="collage-item item-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    ...fadeInUp,
                    visible: {
                      ...fadeInUp.visible,
                      transition: {
                        ...fadeInUp.visible.transition,
                        delay: 0.2,
                      },
                    },
                  }}
                >
                  <img src={slide2} alt="Sri Lanka Culture" />
                </motion.div>
                <motion.div
                  className="collage-item item-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    ...fadeInUp,
                    visible: {
                      ...fadeInUp.visible,
                      transition: {
                        ...fadeInUp.visible.transition,
                        delay: 0.4,
                      },
                    },
                  }}
                >
                  <img src={slide3} alt="Sri Lanka Adventure" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="section-offer pb-5 pt-0">
        <div className="container" style={{ overflow: "hidden" }}>
          {" "}
          {/* Overflow hidden to prevent scrollbars during animation */}
          {/* What We Offer Section */}
          <div className="offer-header text-center mb-5">
            <img
              src={logoSmall}
              alt="SLVP Logo"
              className="offer-logo mx-auto"
            />
            <h5 className="offer-top-title">WHAT WE OFFER</h5>
            <h2 className="offer-main-title">
              TRAVEL, VOLUNTEER, AND COMBINED
            </h2>
            <p className="offer-subtitle">
              "Experience the best of Sri Lanka by joining our travel and
              volunteer programs. Work with children, protect sea turtles, care
              for elephants and more while exploring the island's natural beauty
              and culture."
            </p>
          </div>
          <div className="bento-grid">
            {/* Main Tall Card - Guided Tours */}
            <motion.div
              className="bento-card bento-card-main"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <img src={tourGuideImg} alt="Guided Tours" className="bento-bg" />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h3>Guided Tours</h3>
                <p>
                  Join our guided tours to explore the island's diverse
                  landscapes, ancient sites, and cultural heritage. Immerse
                  yourself in Sri Lankan culture.
                </p>
                <a href="#tours" className="bento-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <div className="bento-col-side">
              {/* Side Card - Volunteer */}
              <motion.div
                href="#volunteer"
                className="bento-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  ...fadeInUp,
                  visible: {
                    ...fadeInUp.visible,
                    transition: {
                      ...fadeInUp.visible.transition,
                      delay: 0.2,
                    },
                  },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={volunteerImg}
                  alt="Volunteer Programs"
                  className="bento-bg"
                />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                  <h3>Volunteer Programs</h3>
                  <p>
                    Give back to local communities and make a difference by
                    volunteering with SLVP.
                  </p>
                  <a href="#volunteer" className="bento-link">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>

              {/* Side Card - Combo */}
              <motion.div
                className="bento-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  ...fadeInUp,
                  visible: {
                    ...fadeInUp.visible,
                    transition: {
                      ...fadeInUp.visible.transition,
                      delay: 0.4,
                    },
                  },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={comboImg} alt="Combo Programs" className="bento-bg" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                  <h3>Combo Programs</h3>
                  <p>
                    Combine travel & volunteering. Create unforgettable memories
                    while making a positive impact.
                  </p>
                  <a href="#combo" className="bento-link">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="#tours" className="btn btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
