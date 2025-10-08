// src/pages/Cart.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [shippingOption, setShippingOption] = useState("delivery");
  const shippingCost = shippingOption === "delivery" ? 7.99 : 0.00; // Mock shipping cost
  const taxRate = 0.07; // Mock 7% tax

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxAmount = subtotal * taxRate;
  const totalPayable = subtotal + shippingCost + taxAmount;
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutMessage("Proceeding to checkout...");
    // In a real app, this would navigate to the checkout page
    setTimeout(() => {
        setCheckoutMessage("Checkout simulated. Thank you!");
        // Optional: clearCart();
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty-page">
        <div className="cart-empty-content">
          <h2>Your cart is empty 🛒</h2>
          <p>Time to fill it with some awesome hoodies!</p>
          <Link to="/shop" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="cart-header-status">
        <div className="breadcrumbs-small">
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / Cart
        </div>
        <div className="checkout-steps">
          <span className="step active">Cart</span>
          <span className="step">Shipping</span>
          <span className="step">Payment</span>
        </div>
        <h1 className="page-title">My Cart</h1>
      </div>

      <div className="cart-content-wrapper">
        <div className="cart-items-list">
          <h2 className="section-title-left">My Cart ({itemCount})</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Link to={`/product/${item.id}`} className="item-image-link">
                <img src={item.imageUrl || item.image} alt={item.name} className="item-image" />
              </Link>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-meta">
                  Color: <span className="meta-value">Blue</span> | Size: <span className="meta-value">M</span>
                </p>
                <div className="price-and-discount">
                  <span className="item-price">${item.price.toFixed(2)}</span>
                  <span className="item-discount">20% OFF</span>
                </div>
              </div>
              
              <div className="item-controls">
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <input type="number" readOnly value={item.quantity} />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary-sidebar">
          
          <div className="summary-section coupon-box">
            <h3>Coupons</h3>
            <div className="coupon-input-group">
              <input type="text" placeholder="Coupon code" className="coupon-input" />
              <button className="apply-coupon-btn">APPLY NOW</button>
            </div>
          </div>

          <div className="summary-section order-box">
            <h3 className="order-title">Your Order</h3>
            
            <div className="summary-line subtotal-line">
              <span>Subtotal ({itemCount} items)</span>
              <span className="value">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-line delivery-option">
                <span>Delivery</span>
                <div className="delivery-radio-group">
                    <label>
                        <input 
                            type="radio" 
                            name="shipping" 
                            value="delivery" 
                            checked={shippingOption === "delivery"}
                            onChange={() => setShippingOption("delivery")} 
                        /> 
                        Delivery ${shippingCost.toFixed(2)}
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="shipping" 
                            value="pickup" 
                            checked={shippingOption === "pickup"}
                            onChange={() => setShippingOption("pickup")} 
                        /> 
                        Pick Up
                    </label>
                    {shippingOption === "pickup" && (
                        <select className="pickup-select">
                            <option>ASAP</option>
                            <option>Schedule Later</option>
                        </select>
                    )}
                </div>
            </div>

            <div className="summary-line tax-line">
              <span>Tax ({taxRate * 100}%)</span>
              <span className="value">${taxAmount.toFixed(2)}</span>
            </div>

            <div className="summary-line total-payable-line">
              <span className="total-label">Total Payable</span>
              <span className="total-value">${totalPayable.toFixed(2)}</span>
            </div>

            <button className="proceed-checkout-btn" onClick={handleCheckout}>
              PROCEED TO CHECKOUT
            </button>
            
            {checkoutMessage && (
                <p className="checkout-message">{checkoutMessage}</p>
            )}

            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;