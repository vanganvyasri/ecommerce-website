// File: /Users/navyasrivanga/ecommerce-website/src/components/pages/HomeLiving.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './HomeLiving.css';

// Import product images
import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/sofa.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/coffeetable.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/curtain.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/lamp.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/rug.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/wallpainting.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/chair.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/mirror.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/bed.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/table.png';
import product11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/clock.png';
import product12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/homelivingimgs/bookshelf.png';

const products = [
    { id: 1, image: product1, name: 'Comfortable Sofa', price: 4999, originalPrice: 6999 },
    { id: 2, image: product2, name: 'Stylish Coffee Table', price: 2999, originalPrice: 3999 },
    { id: 3, image: product3, name: 'Elegant Curtain', price: 1499, originalPrice: 1999 },
    { id: 4, image: product4, name: 'Modern Lamp', price: 799, originalPrice: 1199 },
    { id: 5, image: product5, name: 'Designer Rugs', price: 2499, originalPrice: 3499 },
    { id: 6, image: product6, name: 'Wall Art Painting', price: 1499, originalPrice: 1999 },
    { id: 7, image: product7, name: 'Outdoor Chair', price: 2999, originalPrice: 3999 },
    { id: 8, image: product8, name: 'Decorative Mirror', price: 1799, originalPrice: 2599 },
    { id: 9, image: product9, name: 'Cozy Bed Linen', price: 1299, originalPrice: 1799 },
    { id: 10, image: product10, name: 'Folding Dining Table', price: 4499, originalPrice: 5999 },
    { id: 11, image: product11, name: 'Vintage Clock', price: 799, originalPrice: 1099 },
    { id: 12, image: product12, name: 'Book Shelf', price: 3499, originalPrice: 4999 },
];

const HomeLiving = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div className="home-living-page">
            <h2>Home and Living</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">
                            <span className="discounted-price">₹{product.price}</span>
                            <span className="original-price">₹{product.originalPrice}</span>
                        </div>
                        <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Link to="/" className="back-link">Back to Categories</Link>
        </div>
    );
};

export default HomeLiving;
