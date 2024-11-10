// File: /Users/navyasrivanga/ecommerce-website/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ListingPage from './components/ListingPage';
import PlaceOrder from './components/PlaceOrder';
import SeeOrderPage from './components/SeeOrderPage';
import WomenFashion from './components/pages/WomenFashion';
import MenFashion from './components/pages/MensFashion';
import HomeLiving from './components/pages/HomeLiving';
import Shoes from './components/pages/Shoes';
import Bags from './components/pages/Bags';
import SportsWear from './components/pages/Sportswear';
import BeautyProducts from './components/pages/BeautyProducts';
import Electronics from './components/pages/Electronics';

function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/listing" element={<ListingPage />} />
                        <Route path="/place-order" element={<PlaceOrder />} />
                        <Route path="/see-order" element={<SeeOrderPage />} />
                        <Route path="/category/women-fashion" element={<WomenFashion />} />
                        <Route path="/category/men-fashion" element={<MenFashion />} />
                        <Route path="/category/home-living" element={<HomeLiving />} />
                        <Route path="/category/footwear" element={<Shoes />} />
                        <Route path="/category/bags" element={<Bags />} />
                        <Route path="/category/Sportswear" element={<SportsWear />} />
                        <Route path="/category/beauty-products" element={<BeautyProducts />} />
                        <Route path="/category/electronics" element={<Electronics />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
