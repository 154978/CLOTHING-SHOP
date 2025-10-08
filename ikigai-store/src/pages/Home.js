import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; 
import ProductCard from "../components/ProductCard"; 
import "../styles/Home.css"; 

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const heroMainStyle = {
    backgroundImage: `url('/images/p1 (5).jpg')`
  };

  const detail1Style = {
    backgroundImage: `url('/images/p1 (1).jpg')`
  };

  const detail2Style = {
    backgroundImage: `url('/images/p1 (3).jpg')`
  };

  const detail3Style = {
    backgroundImage: `url('/images/p1 (2).jpg')`
  };

  return (
    <div className="home-page">
      <section className="hero-main" style={heroMainStyle}>
        <div className="hero-content">
          <p className="hero-text-large">Find your style. <br/> Find your purpose.</p>
        </div>
      </section>

      
      <section className="product-showcase">
        <div className="showcase-images-container">
          <div className="showcase-image detail-1" style={detail1Style}></div>
          <div className="showcase-image detail-2" style={detail2Style}></div>
          <div className="showcase-image detail-3" style={detail3Style}></div>
        </div>

        <div className="showcase-callout">
          <h2 className="callout-title">The Essential Unisex Hoodie</h2>
          <p className="callout-subtitle">
            Premium quality, ultimate comfort, ethically made.
          </p>
          <Link to="/shop">
            <button className="view-all-button">View All Hoodies</button>
          </Link>
        </div>
      </section>
      
      <section className="featured-styles">
        
        
        <h2 className="featured-styles-title">Featured Styles</h2>
        
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
