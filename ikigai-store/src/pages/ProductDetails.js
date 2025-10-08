// src/pages/ProductDetails.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../hooks/useCart";
import ProductCard from "../components/ProductCard";
import { FaStar, FaRegStar } from "react-icons/fa";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();

  const [mainImage, setMainImage] = useState(product ? product.imageUrl : "");
  const [selectedSize, setSelectedSize] = useState(product ? product.sizes[0] : null);
  const [selectedColor, setSelectedColor] = useState(product ? product.colors[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({ 
      ...product, 
      quantity, 
      selectedSize, 
      selectedColor 
    });
    setAddedMessage(`Added ${quantity} x ${product.name} to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => 
      i < rating ? <FaStar key={i} className="star-filled" /> : <FaRegStar key={i} className="star-empty" />
    );
  };

  const relatedProducts = products.filter((p) => p.id !== product.id);

  const mockImages = [
    product.imageUrl,
    '/images/product-detail-mock2.jpg', 
    '/images/product-detail-mock3.jpg',
    '/images/product-detail-mock4.jpg'
  ];

  return (
    <div className="product-detail-container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
      </div>
      
      <div className="product-main-area">
        
       
        <div className="product-gallery">
          <div className="main-image-container">
            <img src={mainImage} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-gallery">
            {mockImages.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} thumbnail ${index + 1}`} 
                className={`thumbnail ${img === mainImage ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        
      
        <div className="product-info-panel">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            {renderStars(4)} <span>(4.0 Rating - 120 Reviews)</span>
          </div>
          
          <p className="product-price">${product.price.toFixed(2)}</p>
          
          <div className="info-separator"></div>

          <p className="product-description">{product.description}</p>
          
          
          <div className="option-selector">
            <label className="option-label">Color: <span className="option-value">{selectedColor}</span></label>
            <div className="color-options">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color-swatch ${selectedColor === color ? 'active' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                ></button>
              ))}
            </div>
          </div>
          
        
          <div className="option-selector">
            <label className="option-label">Size: <span className="option-value">{selectedSize}</span></label>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
       
          <div className="cart-controls">
            <div className="quantity-input-group">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                readOnly
              />
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            >
              Add to Cart
            </button>
          </div>
          {addedMessage && <p className="added-message">{addedMessage}</p>}
          
        
          <div className="product-meta-info">
            <p><strong>SKU:</strong> IKIGAI-H{product.id}</p>
            <p><strong>Category:</strong> Hoodies, Unisex</p>
            <p><strong>Material:</strong> 100% Heavyweight Organic Cotton</p>
          </div>
          
        </div>
      </div>
      
      
      <div className="related-products-section">
        <h2 className="related-title">You Might Also Like</h2>
        <div className="related-grid product-grid">
          {relatedProducts.slice(0, 4).map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;