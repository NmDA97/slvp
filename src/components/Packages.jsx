import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logoVac from "../assets/logosmall_vac.png";
import coastalImg from "../assets/packages/coastal.jpg";
import wildlifeImg from "../assets/packages/wildlife.jpg";
import chroniclesImg from "../assets/packages/chronicles.jpg";

const packages = [
  {
    id: 1,
    title: "Coastal Getaways",
    subtitle: "5 Tours • Beach Holiday • All Inclusive",
    image: coastalImg,
    description:
      "Immerse yourself in the culture, history, and traditions of Sri Lanka while experiencing the unparalleled beauty of its beaches. Explore attractions, relax, and create cherished memories on the country's finest shores.",
    includes:
      "Negombo, Chillaw, Trincomalee, Passikuddah, Arugam Bay, Tangalle, Unawatuna, Mirissa, Beruwala",
    link: "#coastal",
  },
  {
    id: 2,
    title: "Wildlife & Nature Paradise",
    subtitle: "6 Tours • National Parks • All Inclusive",
    image: wildlifeImg,
    description:
      "Join us on an adventure through lush rainforests and misty mountains. Spot majestic elephants and leopards, marvel at colorful birdlife, and immerse yourself in local culture with a focus on responsible tourism.",
    includes:
      "Yala, Wilpattu, Minneriya, Udawalawe, Horton Plains, Knuckles Range, Sinharaja Rain Forest",
    link: "#wildlife",
  },
  {
    id: 3,
    title: "Ceylon Chronicles",
    subtitle: "3 Tours • Heritage & Culture • All Inclusive",
    image: chroniclesImg,
    description:
      "Explore Sri Lanka's rich heritage and cultural wonders. Visit UNESCO World Heritage sites, marvel at ancient temples and ruins, and experience vibrant traditions alongside stunning nature.",
    includes:
      "Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Galle, Jaffna",
    link: "#heritage",
  },
];

const Packages = () => {
  return (
    <section id="tours" className="section-packages py-5 bg-light">
      <div className="container">
        {/* Header */}
        {/* Header - Split Layout */}
        {/* Header - Centered Modern */}
        <div className="section-title text-center mb-3">
          <img
            src={logoVac}
            alt="SLVP Logo"
            className="mx-auto mb-3"
            style={{ height: "70px" }}
          />
          {/* <span className="d-block text-uppercase letter-spacing-3 text-secondary fw-bold mb-2 small">
            Discover Sri Lanka
          </span> */}
          <h2 className="display-4 fw-bold text-primary mb-3">Tour Packages</h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: "60px",
              height: "3px",
              background: "var(--accent-color)",
            }}
          ></div>
          <p className="lead mx-auto text-muted" style={{ maxWidth: "800px" }}>
            <strong className="text-dark">Welcome to SLVP – </strong>
            Sri Lanka Vacation Planner! With over two decades of experience, we
            curate authentic, all-inclusive journeys. From pristine beaches to
            ancient heritage, find the perfect package for your dream vacation.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="packages-container">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`package-row ${index % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="package-image-col">
                <div className="package-img-wrapper">
                  <img src={pkg.image} alt={pkg.title} />
                  <div className="img-overlay"></div>
                </div>
              </div>
              <div className="package-info-col">
                <div className="package-info-content">
                  <span className="package-subtitle">{pkg.subtitle}</span>
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="package-desc">{pkg.description}</p>

                  <div className="package-includes-box">
                    <span className="includes-label">
                      <MapPin size={14} className="me-1" /> Destinations
                    </span>
                    <p className="includes-text">{pkg.includes}</p>
                  </div>

                  <a href={pkg.link} className="btn-explore">
                    View Itinerary <ArrowRight size={18} />
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

export default Packages;
