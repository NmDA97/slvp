import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-contact py-5">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Let's Plan Your Dream Vacation</h2>
            <p>
              Ready to explore Sri Lanka? Fill out the form and our travel
              experts will craft the perfect itinerary for you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email Us</h3>
                <p>info@slvp.travel</p>
              </div>
              <div className="contact-item">
                <h3>Call Us</h3>
                <p>+94 77 123 4567</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <select>
                <option value="">Interested In...</option>
                <option value="tours">Guided Tours</option>
                <option value="volunteer">Volunteering</option>
                <option value="combo">Combo Package</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                rows="4"
                placeholder="Tell us about your travel plans..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Request <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
