import { Map, Heart, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-about py-5">
      <div className="container">
        <div className="section-title">
          <h2>Welcome to SLVP</h2>
          <p>
            Your gateway to authentic Sri Lankan experiences and meaningful
            community impact.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Map size={32} />
            </div>
            <h3>Guided Tours</h3>
            <p>
              Explore ancient cities, lush rainforests, and golden beaches with
              our expert local guides.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart size={32} />
            </div>
            <h3>Volunteer Programs</h3>
            <p>
              Make a difference by teaching children, protecting wildlife, or
              supporting community projects.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <CheckCircle size={32} />
            </div>
            <h3>Combo Experiences</h3>
            <p>
              The best of both worlds: Travel the island and dedicate time to
              meaningful volunteer work.
            </p>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#tours" className="btn btn-primary">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
