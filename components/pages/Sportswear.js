// src/components/pages/SportsWear.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './SportsWear.css';

// Import product images
import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 2.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 3.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 4.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 5.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 6.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 7.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 8.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 9.png';
import product11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 10.png';
import product12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/sportwearimgs/image copy 11.png';

const products = [
    { id: 1, image: product1, name: 'Track Pants', price: '₹899', originalPrice: '₹1199' },
    { id: 2, image: product2, name: 'Running T-Shirt', price: '₹499', originalPrice: '₹799' },
    { id: 3, image: product3, name: 'Sports Jersey', price: '₹999', originalPrice: '₹1299' },
    { id: 4, image: product4, name: 'Sports Shorts', price: '₹599', originalPrice: '₹899' },
    { id: 5, image: product5, name: 'Sweatshirt', price: '₹799', originalPrice: '₹1199' },
    { id: 6, image: product6, name: 'Sports Hoodie', price: '₹999', originalPrice: '₹1399' },
    { id: 7, image: product7, name: 'Tank Top', price: '₹399', originalPrice: '₹699' },
    { id: 8, image: product8, name: 'Sports Pants', price: '₹799', originalPrice: '₹1099' },
    { id: 9, image: product9, name: 'Polo T-Shirt', price: '₹699', originalPrice: '₹999' },
    { id: 10, image: product10, name: 'Sport Jacket', price: '₹1499', originalPrice: '₹1999' },
    { id: 11, image: product11, name: 'Yoga Tights', price: '₹899', originalPrice: '₹1299' },
    { id: 12, image: product12, name: 'Zip-Up Sweater', price: '₹899', originalPrice: '₹1299' },
];

const SportsWear = () => {
    const { addToCart = () => {} } = useContext(CartContext) || {};
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        if (addToCart) {
            addToCart(product);
            navigate('/place-order');
        } else {
            console.error("addToCart function is not defined in CartContext.");
        }
    };

    return (
        <div className="sports-wear-page">
            <h2>Sports Wear</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">
                            <span className="discounted-price">{product.price}</span>
                            <span className="original-price">{product.originalPrice}</span>
                        </div>
                        <button
                            className="add-to-cart"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Link to="/" className="back-link">Back to Categories</Link>
        </div>
    );
};

export default SportsWear;
