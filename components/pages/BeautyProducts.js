import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './BeautyProducts.css';

// Import product images
import product1 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image.png';
import product2 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy.png';
import product3 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 2.png';
import product4 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 3.png';
import product5 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 4.png';
import product6 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 5.png';
import product7 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 6.png';
import product8 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 7.png';
import product9 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 8.png';
import product10 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 9.png';
import product11 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 10.png';
import product12 from '/Users/navyasrivanga/ecommerce-website/src/components/pages/beautyproductsimgs/image copy 11.png';

const products = [
    { id: 1, image: product1, name: 'Lipstick', price: '₹299', originalPrice: '₹499' },
    { id: 2, image: product2, name: 'Foundation', price: '₹799', originalPrice: '₹999' },
    { id: 3, image: product3, name: 'Mascara', price: '₹399', originalPrice: '₹599' },
    { id: 4, image: product4, name: 'Blush', price: '₹499', originalPrice: '₹699' },
    { id: 5, image: product5, name: 'Eyeliner', price: '₹199', originalPrice: '₹399' },
    { id: 6, image: product6, name: 'Moisturizer', price: '₹599', originalPrice: '₹799' },
    { id: 7, image: product7, name: 'Serum', price: '₹699', originalPrice: '₹899' },
    { id: 8, image: product8, name: 'Primer', price: '₹499', originalPrice: '₹699' },
    { id: 9, image: product9, name: 'Face Wash', price: '₹199', originalPrice: '₹399' },
    { id: 10, image: product10, name: 'Concealer', price: '₹399', originalPrice: '₹599' },
    { id: 11, image: product11, name: 'Toner', price: '₹299', originalPrice: '₹499' },
    { id: 12, image: product12, name: 'Setting Powder', price: '₹349', originalPrice: '₹549' },
];

const BeautyProducts = () => {
    const { addToCart = () => {} } = useContext(CartContext) || {};
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/place-order');
    };

    return (
        <div className="beauty-products-page">
            <h2>Beauty Products</h2>
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

export default BeautyProducts;
