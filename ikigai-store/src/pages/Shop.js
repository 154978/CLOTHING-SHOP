import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

const Shop = () => {
  const [visibleCount, setVisibleCount] = useState(12); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const heroBannerStyle = {
    backgroundImage: `url('/images/p1 (9).jpg')`
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="shop-page">
      
     
      <section className="shop-hero" style={heroBannerStyle}>
        <div className="shop-hero-content">
          <h1 className="shop-title">Shop</h1>
          <p className="breadcrumbs">Home / Shop</p>
        </div>
       
      </section>

      <div className="shop-main-content">
        
      
        <section className="shop-controls-bar">
          <div className="filter-options">
            <span className="filter-item">Filter By</span>
            <span className="filter-item dropdown">Categories ▼</span>
            
          
            <div className="filter-item dropdown color-filter">
              <span className="filter-title">Color ▼</span>
              <div className="color-dropdown-content">
                <label><input type="checkbox" defaultChecked /> Blue</label>
                <label><input type="checkbox" defaultChecked /> Grey</label>
                <label><input type="checkbox" /> Red</label>
                <label><input type="checkbox" /> Yellow</label>
              </div>
            </div>
          

            <span className="filter-item dropdown">Size ▼</span>
            <span className="filter-item dropdown">Brand ▼</span>
            <span className="filter-item dropdown">Price ▼</span>
          </div>
          
          <div className="sort-view-options">
            <span className="sort-item dropdown">Default Sorting ▼</span>
            <div className="view-mode-buttons">
              <button className="view-mode-btn active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
              </button>
              <button className="view-mode-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </section>

        
        <div className="product-grid shop-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

       
        <div className="shop-pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button className="page-btn arrow" onClick={() => goToPage(currentPage + 1)}>
              →
            </button>
          )}
        </div>
        
      </div>
     
     
    </div>
  );
};

export default Shop;
