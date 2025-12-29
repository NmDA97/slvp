import { useState } from "react";
import {
  Map,
  Globe,
  Award,
  Wallet,
  Leaf,
  Headphones,
  ArrowRight,
} from "lucide-react";
import logoVac from "../assets/logosmall_vac.png";

const whyUsData = [
  {
    icon: <Map size={24} />,
    title: "EXPERTISE IN PLANNING CUSTOMIZED TOURS",
    content:
      "We have years of experience in planning tailor-made and customized tours for our clients according to their interests, preferences, and budget. Our team of experienced travel consultants will work with you to create an itinerary that meets your expectations and ensures that you have an unforgettable vacation in Sri Lanka.",
  },
  {
    icon: <Globe size={24} />,
    title: "EXTENSIVE KNOWLEDGE OF SRI LANKA",
    content:
      "Our team of licensed guides has extensive knowledge of Sri Lanka, including its history, culture, cuisine, and hidden gems. They are always ready to share their knowledge and experience with you, giving you an authentic and immersive experience of our country.",
  },
  {
    icon: <Award size={24} />,
    title: "QUALITY SERVICES AND ATTENTION TO DETAIL",
    content:
      "At SLVP, we pride ourselves on delivering high-quality services to our clients paying serious attention to every detail of their trip. From transportation and accommodations to activities and experiences, we want to make sure that everything is well-planned and taken care of, leaving you with nothing to worry about but enjoying your dream vacation.",
  },
  {
    icon: <Wallet size={24} />,
    title: "AFFORDABLE PRICES",
    content:
      "We know how important it is to offer competitive prices without compromising on the quality of services provided. We work with trusted partners in Sri Lanka to provide you with the best service that is value for your money, making sure that your vacation is not only unforgettable and enjoyable but also affordable.",
  },
  {
    icon: <Leaf size={24} />,
    title: "SUSTAINABLE, MEANINGFUL, AND RESPONSIBLE TRAVEL",
    content:
      "We prioritize sustainable, meaningful, and responsible travel. We work with local communities to ensure that our impact is positive, and we encourage our clients to do the same. When you travel with SLVP, you can feel good knowing that you're making a positive impact while having an amazing trip.",
  },
  {
    icon: <Headphones size={24} />,
    title: "OUTSTANDING CUSTOMER SERVICE",
    content:
      "Our dedicated friendly team of travel experts is available 24/7 to assist you with any questions or concerns you should have. It’s a part of our service that we provide you with swift, personalized, and attentive customer service to ensure that you have a smooth and enjoyable travel experience with us in Sri Lanka.",
  },
];

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="why-us" className="section-why-us py-5 bg-white">
      <div className="container">
        <div className="why-us-header text-center mb-5">
          <img src={logoVac} alt="SLVP Logo" className="why-us-logo mx-auto" />
          <h2 className="why-us-title mt-3">WHY YOU SHOULD TRAVEL WITH SLVP</h2>
        </div>

        <div className="why-us-tabs-container">
          {/* Left Side: Tabs List */}
          <div className="why-us-tabs-list">
            {whyUsData.map((item, index) => (
              <div
                key={index}
                className={`why-us-tab-item ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{item.icon}</span>
                <span className="tab-title">{item.title}</span>
                {activeTab === activeTab && (
                  <div className="active-indicator" />
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Content Area */}
          <div className="why-us-content-area">
            <div className="content-card">
              <div className="content-icon-large">
                {whyUsData[activeTab].icon}
              </div>
              <h3>{whyUsData[activeTab].title}</h3>
              <p>{whyUsData[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
