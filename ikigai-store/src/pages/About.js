import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {

  const heroBannerStyle = {
    backgroundImage: `url('/images/p1 (8).jpg')`
  };

  const craftImage1Style = {
    backgroundImage: `url('/images/p1 (7).jpg')`
  };

  const craftImage2Style = {
    backgroundImage: `url('/images/p1 (6).jpg')`
  };

  const craftImage3Style = {
    backgroundImage: `url('/images/p1 (4).jpg')`
  };

  return (
    <div className="about-page">
      
      <section className="about-hero-banner" style={heroBannerStyle}>
        
      </section>


      <section className="about-content-section">
        <h1 className="about-us-header">ABOUT US</h1>
        <div className="about-text-block">
          <p>
            At IKIGAI, we believe in crafting more than just clothes; we create connections. Inspired by the Japanese concept of finding your purpose, our brand is dedicated to designing timeless pieces that empower you to express your authentic self. Every stitch and every fabric choice is a step towards a life of intention and style.
          </p>
        </div>
      </section>


      <section className="craftsmanship-section">
        <h2 className="section-title">Craftsmanship, Quality, and Sustainability</h2>
        <div className="craftsmanship-grid">
          
          <div className="craftsmanship-item">
            <div className="craftsmanship-image" style={craftImage1Style}>
              
            </div>
            
          </div>
          
          <div className="craftsmanship-item">
            <div className="craftsmanship-image" style={craftImage2Style}>
              
            </div>
          
          </div>
          
          <div className="craftsmanship-item">
            <div className="craftsmanship-image" style={craftImage3Style}>
            
            </div>
          
          </div>

        </div>
      </section>

    
      <section className="join-journey-section">
        <h2 className="section-title">Join the Journey!</h2>
        <p className="journey-text">
          IKIGAI is more than just a brand—it's a community. It's for those who seek comfort in their clothes and purpose in their lives. We invite you to join us on this journey of finding your style and your purpose, one piece at a time.
        </p>
        <Link to="/register" className="read-more-link">
          Read More
        </Link>
      </section>

    </div>
  );
};

export default About; 