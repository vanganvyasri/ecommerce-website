import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Electronics.css';

// Import product images
import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 2.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 3.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 4.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 5.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 6.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 7.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 8.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 9.png';
import product11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 10.png';
import product12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/electronicsimgs/image copy 11.png';

const products = [
    { id: 1, image: product1, name: 'Laptop', price: '₹49999', originalPrice: '₹54999' },
    { id: 2, image: product2, name: 'Smartphone', price: '₹14999', originalPrice: '₹19999' },
    { id: 3, image: product3, name: 'Headphones', price: '₹2999', originalPrice: '₹3999' },
    { id: 4, image: product4, name: 'Smart Watch', price: '₹4999', originalPrice: '₹6999' },
    { id: 5, image: product5, name: 'Camera', price: '₹24999', originalPrice: '₹29999' },
    { id: 6, image: product6, name: 'Tablet', price: '₹19999', originalPrice: '₹24999' },
    { id: 7, image: product7, name: 'Bluetooth Speaker', price: '₹1999', originalPrice: '₹2999' },
    { id: 8, image: product8, name: 'Monitor', price: '₹9999', originalPrice: '₹12999' },
    { id: 9, image: product9, name: 'Printer', price: '₹4999', originalPrice: '₹6999' },
    { id: 10, image: product10, name: 'Gaming Console', price: '₹39999', originalPrice: '₹44999' },
    { id: 11, image: product11, name: 'Wi-Fi Router', price: '₹1499', originalPrice: '₹2499' },
    { id: 12, image: product12, name: 'DSLR Camera', price: '₹35999', originalPrice: '₹39999' },
];

const Electronics = () => {
    const { addToCart = () => {} } = useContext(CartContext) || {};
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/place-order');
    };

    return (
        <div className="electronics-page">
            <h2>Electronics</h2>
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

export default Electronics;
