import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './SeeOrderPage.css';

const SeeOrder = () => {
    const { orderHistory } = useContext(CartContext);

    // Calculate the total price of all orders and return formatted price
    const getTotalPrice = () => {
        const total = orderHistory.reduce((total, item) => total + item.price, 0);
        return total.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    };

    if (orderHistory.length === 0) {
        return <h2>No orders placed yet.</h2>;
    }

    return (
        <div className="order-history-page">
            <h2>Your Orders</h2>
            <div className="order-items">
                {orderHistory.map((item, index) => (
                    <div key={index} className="order-item">
                        <img src={item.image} alt={item.name} className="order-item-image" />
                        <div className="order-item-details">
                            <h3>{item.name}</h3>
                            {/* Displaying the price without the ₹ symbol */}
                            <p className="order-item-price">Price: {item.price.toLocaleString('en-IN')}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Displaying the total price with ₹ symbol */}
            <div className="total-price">
                <h3>Total: {getTotalPrice()}</h3>
            </div>
        </div>
    );
};

export default SeeOrder;
