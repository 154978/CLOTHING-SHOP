// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/ProductCard.css"; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // Use price from product object
  const formattedPrice = `₱${product.price.toFixed(2)}`;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        
        <div 
          className="product-image-container" 
          style={{ backgroundImage: `url(${product.image})` }} 
        >
        
        </div>
      </Link>
      
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-price">{formattedPrice}</p>
        
        <button 
          className="product-add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;