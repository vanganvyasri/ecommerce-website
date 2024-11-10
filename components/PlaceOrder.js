import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { cartItems, getTotalPrice, removeFromCart, placeOrder } = useContext(CartContext);
    const [isCheckoutPage, setIsCheckoutPage] = useState(false);
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <Link to="/" className="go-back-link">Go back to shopping</Link>
            </div>
        );
    }

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    const handleCheckout = () => {
        setIsCheckoutPage(true);
    };

    const handlePlaceOrder = () => {
        placeOrder();  // Place the order and clear the cart
        navigate('/see-order');  // Redirect to the "See Orders" page
    };

    if (isCheckoutPage) {
        return (
            <div className="checkout-page">
                <h2>Payment Options</h2>
                <div className="payment-container">
                    <p className="total-amount">Total Amount: ₹{getTotalPrice()}</p>
                    <div className="payment-option">
                        <h3>Choose Payment Method</h3>
                        <button onClick={handlePlaceOrder} className="payment-button">
                            Cash on Delivery
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="place-order-page">
            <h2>Review Your Order</h2>
            <div className="cart-items-container">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p className="cart-item-price">Price: {item.price}</p>
                        </div>
                        <button
                            className="remove-item"
                            onClick={() => handleRemoveItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="order-summary-container">
                <div className="order-summary">
                    <h3>Total: ₹{getTotalPrice()}</h3>
                </div>
            </div>

            <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default PlaceOrder;
