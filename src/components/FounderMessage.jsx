import React from "react";
import "./FounderMessage.css";
import kitImg from "../assets/kit.png";

const FounderMessage = () => {
  return (
    <section className="founder-message">
      <div className="founder-content-wrapper">
        <div className="founder-body">
          <div className="founder-image-container">
            <img
              src={kitImg}
              alt="Kithsiri Tennakoon"
              className="founder-image"
            />
          </div>
          <div className="founder-text">
            <div className="founder-quote-icon">“</div>
            <p className="message-text">
              With over two decades of proven experience working with
              international travelers from around the globe and all walks of
              life, I, as the CEO and Founder of SLVP, understand what it takes
              to make your Sri Lanka experience exceptional. Drawing on my
              extensive background in the travel industry, I provide
              personalized journeys that exceed expectations. Whether you seek a
              round tour experience exploring diverse landscapes, heritage, or
              culture for your holiday, or a volunteer program engaging with
              local communities to give back, trust my expertise and passion to
              guide you through an unforgettable adventure in Sri Lanka. Let
              SLVP make your experience truly exceptional.
            </p>
            <div className="founder-details">
              <h3 className="founder-name">Kithsiri Tennakoon</h3>
              <span className="founder-title">CEO & Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
