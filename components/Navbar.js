import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">ShopPOOL</Link>
                <div className="navbar-links">
                    <Link to="/listing" className="navbar-link">Listing</Link>
                    <Link to="/place-order" className="navbar-link">Place Order</Link>
                    <Link to="/see-order" className="navbar-link">See Orders</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
