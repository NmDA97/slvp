import { MapPin, ArrowRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Coastal Getaways",
    image:
      "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1032&q=80",
    description:
      "Relax on golden sands and explore vibrant coral reefs on the southern coast.",
    link: "#coastal",
  },
  {
    id: 2,
    title: "Wildlife Safaris",
    image:
      "https://images.unsplash.com/photo-1588656754098-97c768c7151e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80", // Elephant
    description:
      "Encounter majestic elephants and elusive leopards in their natural habitats.",
    link: "#wildlife",
  },
  {
    id: 3,
    title: "Heritage Trails",
    image:
      "https://images.unsplash.com/photo-1625418168190-784381254884?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80", // Nine arch bridge
    description:
      "Journey through time visiting ancient temples, colonial forts, and tea plantations.",
    link: "#heritage",
  },
];

const Packages = () => {
  return (
    <section id="tours" className="section-packages py-5 bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Curated Tour Packages</h2>
          <p>
            Handpicked experiences designed to showcase the very best of Sri
            Lanka.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-overlay">
                  <a href={pkg.link} className="btn-icon">
                    <ArrowRight size={24} />
                  </a>
                </div>
              </div>
              <div className="package-content">
                <div className="package-meta">
                  <MapPin size={16} className="text-accent" />
                  <span>Sri Lanka</span>
                </div>
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <a href={pkg.link} className="link-arrow">
                  View Itinerary <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
