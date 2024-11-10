import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Shoes.css';

// Import product images
import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 2.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 3.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 4.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 5.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 6.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 7.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 8.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/shoesimgs/image copy 9.png';

const products = [
    { id: 1, image: product1, name: 'Running Shoes', price: 2999, originalPrice: 3999 },
    { id: 2, image: product2, name: 'Casual Sneakers', price: 2499, originalPrice: 3499 },
    { id: 3, image: product3, name: 'Leather Boots', price: 4999, originalPrice: 6999 },
    { id: 4, image: product4, name: 'Sports Sandals', price: 1599, originalPrice: 2199 },
    { id: 5, image: product5, name: 'High Heels', price: 2999, originalPrice: 3999 },
    { id: 6, image: product6, name: 'Formal Shoes', price: 3499, originalPrice: 4499 },
    { id: 7, image: product7, name: 'Slippers', price: 799, originalPrice: 1099 },
    { id: 8, image: product8, name: 'Boat Shoes', price: 2299, originalPrice: 2999 },
    { id: 9, image: product9, name: 'Flip Flops', price: 599, originalPrice: 999 },
    { id: 10, image: product10, name: 'Boots', price: 4999, originalPrice: 6999 }
];

const Shoes = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div className="shoes-page">
            <h2>Shoes</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">
                            <span className="discounted-price">
                                ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <span className="original-price">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
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

export default Shoes;
