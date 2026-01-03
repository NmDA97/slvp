import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import logoVac from "../assets/volunteer/logosmall_v.png";
import childImg from "../assets/volunteer/child.png";
import wildlifeImg from "../assets/volunteer/wildlife.jpg";
import combinedImg from "../assets/volunteer/combined.png";

const programs = [
  {
    id: 1,
    title: "Work With Children",
    subtitle: "5 Projects • 2-12 Weeks • All Inclusive",
    image: childImg,
    description:
      "Looking for a meaningful volunteer experience that can truly transform lives? Whether you have a passion for working in children's homes, teaching English in local schools, supporting children with special needs, or coaching sports, we have an opportunity that will fulfill your desire to make a real difference.",
    details:
      "Children's Homes, Teaching English, Special Needs Support, Sports Coaching",
    link: "#children",
  },
  {
    id: 2,
    title: "Wildlife Conservation",
    subtitle: "2 Projects • 1-4 Weeks • All Inclusive",
    image: wildlifeImg,
    description:
      "Experience the wonders of wildlife conservation with SLVP's volunteer projects. Protect endangered sea turtles and provide essential support to gentle giants. Make a lasting impact and be a part of preserving these incredible creatures.",
    details: "Sea Turtle Conservation, Elephant Care & Welfare",
    link: "#wildlife-conservation",
  },
  {
    id: 3,
    title: "Combined Projects",
    subtitle: "3 Projects • 4-12 Weeks • Customizable",
    image: combinedImg,
    description:
      "Make the most of your valuable time with our flexible combined volunteer projects. We offer you the unique opportunity to select any two projects that resonate with you the most. Customize your volunteer experience and maximize your impact in the areas that inspire you.",
    details:
      "Combine: Children's Work + Sea Turtle Conservation + Elephant Care",
    link: "#combined",
  },
];

const Volunteer = () => {
  return (
    <section id="volunteer" className="section-volunteer py-5 bg-azure">
      <div className="container">
        {/* Header - Centered Modern */}
        <div className="section-title text-center mb-3">
          <img
            src={logoVac}
            alt="SLVP Logo"
            className="mx-auto mb-1"
            style={{ height: "60px" }}
          />
          <span className="d-block text-uppercase letter-spacing-3 text-accent fw-bold mb-2 small">
            Make a Difference
          </span>
          <h2 className="display-4 fw-bold text-primary mb-3">
            Volunteer Programs
          </h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: "60px",
              height: "3px",
              background: "var(--accent-color)",
            }}
          ></div>
          <p className="lead mx-auto text-muted" style={{ maxWidth: "800px" }}>
            <strong className="text-dark">Welcome to SLVP Volunteer! </strong>
            We invite all those who are passionate about volunteering to join us
            in Sri Lanka. From teaching and childcare to wildlife conservation,
            find the program where you can make the biggest impact.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="packages-container">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className={`package-row ${index % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="package-image-col">
                <div className="package-img-wrapper">
                  <img src={program.image} alt={program.title} />
                  <div className="img-overlay"></div>
                </div>
              </div>
              <div className="package-info-col">
                <div className="package-info-content">
                  <h3 className="package-title">{program.title}</h3>
                  <span className="package-subtitle">{program.subtitle}</span>
                  <p className="package-desc">{program.description}</p>

                  <div className="package-includes-box">
                    <span className="includes-label">
                      <Heart size={14} className="me-2" /> Project Focus
                    </span>
                    <p className="includes-text">{program.details} More ..</p>
                  </div>

                  <a href={program.link} className="btn-explore">
                    View Project Details <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
