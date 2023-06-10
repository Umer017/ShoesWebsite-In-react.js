import React from 'react';
import './style.css';
import Navbar from './components/Navbar/Navbar.js';
import Index from './components/Index/Index.js';
import Cart from './components/Cart/Cart.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Checkout from './components/Checkout/Checkout.js';
import Wishlist from './components/Wishlist/Wishlist.js';
import ShoesForMen from './components/ShoesForMen/ShoesForMen.js';
import Registration from './components/Registration/Registration.js';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage .js';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import CartProvider from './cartContext';
import ListShoe from './Admin/ListShoe';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/shoeformen" element={<ShoesForMen />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route
            path="/productdetails"
            element={<ProductDetailsPage />}
          ></Route>
          <Route path="/listshoe" element={<ListShoe />}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
      <Footer />
    </CartProvider>
  );
}
