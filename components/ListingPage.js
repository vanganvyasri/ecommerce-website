import React from 'react';
import { Link } from 'react-router-dom';
import './ListingPage.css';

import image1 from '/Users/navyasrivanga/ecommerce-website/src/components/images/men.png';
import image2 from '/Users/navyasrivanga/ecommerce-website/src/components/images/womens.png';
import image3 from '/Users/navyasrivanga/ecommerce-website/src/components/images/home.png';
import image4 from '/Users/navyasrivanga/ecommerce-website/src/components/images/shoes.png';
import image5 from '/Users/navyasrivanga/ecommerce-website/src/components/images/sportswear.png';
import image6 from '/Users/navyasrivanga/ecommerce-website/src/components/images/bags.png';
import image7 from '/Users/navyasrivanga/ecommerce-website/src/components/images/beauty.png';
import image8 from '/Users/navyasrivanga/ecommerce-website/src/components/images/electronics.png';

const ListingPage = () => {
    return (
        <div className="listing-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/" className="logo">E-Shop</Link>
                    <Link to="/" className="nav-item">HomePage</Link>
                    <Link to="/listing" className="nav-item">Listing Page</Link>
                    <Link to="/place-order" className="nav-item">Place Order</Link>
                    <Link to="/see-order" className="nav-item">See Orders</Link>
                    {/* <input type="text" className="search-bar" placeholder="Search for products, brands, and more" /> */}
                </div>
                {/* <div className="nav-right">
                    <Link to="/login" className="nav-link login-button">Login</Link>
                    <Link to="/cart" className="nav-link cart-button">🛒</Link>
                </div> */}
            </nav>

            {/* Category Section */}
            <section className="category-section">
                <h2>Shop By Category</h2>
                <div className="category-row">
                    <div className="category-item">
                        <img src={image1} alt="Men's Fashion" />
                        <h3>Men's Fashion</h3>
                        <span>MIN. 30% OFF</span>
                        <Link to="/category/men-fashion" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image2} alt="Women's Fashion" />
                        <h3>Women's Fashion</h3>
                        <span>MIN. 50% OFF</span>
                        <Link to="/category/women-fashion" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image3} alt="Home & Living" />
                        <h3>Home & Living</h3>
                        <span>Up to 40% OFF</span>
                        <Link to="/category/home-living" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image4} alt="Footwear" />
                        <h3>Footwear</h3>
                        <span>Up to 20% OFF</span>
                        <Link to="/category/footwear" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image5} alt="Sports Wear" />
                        <h3>Sports Wear</h3>
                        <span>Up to 70% OFF</span>
                        <Link to="/category/Sportswear" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image6} alt="Bags" />
                        <h3>Bags</h3>
                        <span>Up to 50% OFF</span>
                        <Link to="/category/bags" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image7} alt="Beauty Products" />
                        <h3>Beauty Products</h3>
                        <span>MIN. 15% OFF</span>
                        <Link to="/category/beauty-products" className="shop-now">Shop Now</Link>
                    </div>
                    <div className="category-item">
                        <img src={image8} alt="Electronics" />
                        <h3>Electronics</h3>
                        <span>Up to 50% OFF</span>
                        <Link to="/category/electronics" className="shop-now">Shop Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListingPage;
