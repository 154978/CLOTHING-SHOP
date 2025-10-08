// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./hooks/useCart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext"; 
import "./App.css";

const App = () => {
  return (
 
    <AuthProvider>
      <CartProvider>
        <Navbar />
     
        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
           
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;