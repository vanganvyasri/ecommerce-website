import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './MensFashion.css';

// Import product images
import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/tshirt.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/cshirt.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/jacket.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/jeans.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/hoodie.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/suit.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/sweater.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/shorts.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/blazer.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/trouser.png';
import product11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/polotshirt.png';
import product12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/menfashionimgs/vest.png';

const products = [
    { id: 1, image: product1, name: 'Casual T-Shirt', price: '₹499', originalPrice: '₹799' },
    { id: 2, image: product2, name: 'Formal Shirt', price: '₹999', originalPrice: '₹1299' },
    { id: 3, image: product3, name: 'Winter Jacket', price: '₹1499', originalPrice: '₹1999' },
    { id: 4, image: product4, name: 'Denim Jeans', price: '₹1199', originalPrice: '₹1699' },
    { id: 5, image: product5, name: 'Comfort Hoodie', price: '₹899', originalPrice: '₹1299' },
    { id: 6, image: product6, name: 'Classic Suit', price: '₹2999', originalPrice: '₹3499' },
    { id: 7, image: product7, name: 'Wool Sweater', price: '₹799', originalPrice: '₹1199' },
    { id: 8, image: product8, name: 'Summer Shorts', price: '₹599', originalPrice: '₹899' },
    { id: 9, image: product9, name: 'Blazer', price: '₹1999', originalPrice: '₹2499' },
    { id: 10, image: product10, name: 'Office Trousers', price: '₹899', originalPrice: '₹1299' },
    { id: 11, image: product11, name: 'Polo T-Shirt', price: '₹699', originalPrice: '₹999' },
    { id: 12, image: product12, name: 'Gym Vest', price: '₹299', originalPrice: '₹499' },
];

const MenFashion = () => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to your cart.`);
        navigate('/place-order'); // Redirect to place order page after adding to cart
    };

    return (
        <div className="men-fashion-page">
            <h2>Men's Fashion</h2>
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

export default MenFashion;
