// src/components/pages/Bags.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Bags.css';

// Import bag images
import bag1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image.png';
import bag2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy.png';
import bag3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 2.png';
import bag4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 3.png';
import bag5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 4.png';
import bag6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 5.png';
import bag7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 6.png';
import bag8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 7.png';
import bag9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 8.png';
import bag10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 9.png';
import bag11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 10.png';
import bag12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/bagsimgs/image copy 11.png';

const products = [
    { id: 1, image: bag1, name: 'Casual Tote Bag', price: '₹799', originalPrice: '₹999' },
    { id: 2, image: bag2, name: 'Leather Backpack', price: '₹1499', originalPrice: '₹1899' },
    { id: 3, image: bag3, name: 'Travel Duffel', price: '₹1799', originalPrice: '₹2299' },
    { id: 4, image: bag4, name: 'Sling Bag', price: '₹599', originalPrice: '₹899' },
    { id: 5, image: bag5, name: 'Gym Bag', price: '₹1299', originalPrice: '₹1599' },
    { id: 6, image: bag6, name: 'Messenger Bag', price: '₹999', originalPrice: '₹1299' },
    { id: 7, image: bag7, name: 'Handbag', price: '₹699', originalPrice: '₹999' },
    { id: 8, image: bag8, name: 'Mini Backpack', price: '₹899', originalPrice: '₹1199' },
    { id: 9, image: bag9, name: 'Beach Bag', price: '₹499', originalPrice: '₹799' },
    { id: 10, image: bag10, name: 'Office Briefcase', price: '₹1999', originalPrice: '₹2499' },
    { id: 11, image: bag11, name: 'Laptop Bag', price: '₹1599', originalPrice: '₹1999' },
    { id: 12, image: bag12, name: 'Clutch Bag', price: '₹399', originalPrice: '₹599' },
];

const Bags = () => {
    const { addToCart = () => {} } = useContext(CartContext) || {};
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        if (addToCart) {
            addToCart(product);
            navigate('/place-order'); // Redirect to place order page after adding to cart
        } else {
            console.error("addToCart function is not defined in CartContext.");
        }
    };

    return (
        <div className="bags-page">
            <h2>Bags</h2>
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

export default Bags;
