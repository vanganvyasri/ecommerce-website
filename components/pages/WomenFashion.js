// File: /Users/navyasrivanga/ecommerce-website/src/components/pages/WomenFashion.js
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './WomenFashion.css';

import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress1.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress2.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress3.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress4.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress5.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress6.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/dress7.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/kurti.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/shirt.png';
import product11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/suit.png';
import product12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/womenfashionimgs/suit1.png';

const products = [
    { id: 1, image: product1, name: 'Stylish Dress', price: 999, originalPrice: 1499 },
    { id: 2, image: product2, name: 'Trendy Top', price: 799, originalPrice: 1199 },
    { id: 3, image: product3, name: 'Elegant Gown', price: 1299, originalPrice: 1899 },
    { id: 4, image: product4, name: 'Classic Kurta', price: 899, originalPrice: 1399 },
    { id: 5, image: product5, name: 'Casual Dress', price: 799, originalPrice: 1199 },
    { id: 6, image: product6, name: 'Party Dress', price: 1499, originalPrice: 2099 },
    { id: 7, image: product7, name: 'Floral Dress', price: 1099, originalPrice: 1599 },
    { id: 8, image: product8, name: 'Denim Dress', price: 1199, originalPrice: 1699 },
    { id: 9, image: product9, name: 'Kurti', price: 699, originalPrice: 999 },
    { id: 10, image: product10, name: 'Casual Shirt', price: 599, originalPrice: 899 },
    { id: 11, image: product11, name: 'Formal Suit', price: 1999, originalPrice: 2499 },
    { id: 12, image: product12, name: 'Traditional Suit', price: 1499, originalPrice: 1999 },
];

const WomenFashion = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div className="women-fashion-page">
            <h2>Women's Fashion</h2>
            <div className="products-grid">
                {products.map((product) => (
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

export default WomenFashion;
