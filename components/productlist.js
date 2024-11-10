// ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ title }) => {
    return (
        <div className="product-list">
            <h2>{title}</h2>
            <div className="products-grid">
                {[...Array(50)].map((_, index) => (
                    <div className="product-item" key={index}>
                        <img src={`https://via.placeholder.com/150?text=${title}+${index + 1}`} alt={`${title} ${index + 1}`} />
                        <p>{title} {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
