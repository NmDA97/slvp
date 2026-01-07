import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoVac from "../assets/logosmall_vac.png";
import coastalImg from "../assets/packages/coastal.jpg";
import wildlifeImg from "../assets/packages/wildlife.jpg";
import chroniclesImg from "../assets/packages/chronicles.jpg";

const packages = [
  {
    id: 1,
    title: "Coastal Getaways",
    subtitle: "4 Tours • Beach Holiday • All Inclusive",
    image: coastalImg,
    description:
      "Immerse yourself in the culture, history, and traditions of Sri Lanka while experiencing the unparalleled beauty of its beaches. Explore attractions, relax, and create cherished memories on the country's finest shores.",
    includes:
      "Negombo, Chillaw, Trincomalee, Passikuddah, Arugam Bay, Tangalle, Unawatuna, Mirissa, Beruwala",
    link: "/coastal-getaways",
  },
  {
    id: 2,
    title: "Wildlife & Nature Paradise",
    subtitle: "5 Tours • National Parks • All Inclusive",
    image: wildlifeImg,
    description:
      "Join us on an adventure through lush rainforests and misty mountains. Spot majestic elephants and leopards, marvel at colorful birdlife, and immerse yourself in local culture with a focus on responsible tourism.",
    includes:
      "Yala National Park, Udawalawe Elephant Transit Home, Sinharaja, Whale Watching",
    link: "/wildlife-nature",
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
    link: "/ceylon-chronicles",
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
            className="mx-auto mb-1"
            style={{ height: "70px" }}
          />
          <span className="d-block text-uppercase letter-spacing-3 text-accent fw-bold mb-2 small">
            Discover Sri Lanka
          </span>
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
              {/* Mobile Title - Visible only on mobile */}
              <Link to={pkg.link} className="title-link-wrapper">
                <h3 className="package-title mobile-pkg-title">{pkg.title}</h3>
              </Link>

              <div className="package-image-col">
                <div className="package-img-wrapper">
                  <img src={pkg.image} alt={pkg.title} />
                </div>
              </div>
              <div className="package-info-col">
                <div className="package-info-content">
                  <Link to={pkg.link} className="title-link-wrapper">
                    <h3 className="package-title desktop-pkg-title">
                      {pkg.title}
                    </h3>
                  </Link>
                  <span className="package-subtitle">{pkg.subtitle}</span>
                  <p className="package-desc">{pkg.description}</p>

                  <div className="package-includes-box mb-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <MapPin size={18} className="text-secondary" />
                      <span className="fw-bold text-secondary text-uppercase small ls-1">
                        Destinations
                      </span>
                    </div>
                    <p className="includes-text m-0">{pkg.includes} More ..</p>
                  </div>

                  {pkg.link.startsWith("/") ? (
                    <Link to={pkg.link} className="bento-link">
                      View Details <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <a href={pkg.link} className="bento-link">
                      View Details <ArrowRight size={16} />
                    </a>
                  )}
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
