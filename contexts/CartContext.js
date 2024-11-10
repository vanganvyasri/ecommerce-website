import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [orderHistory, setOrderHistory] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // Place the order
    const placeOrder = () => {
        setOrderHistory([...orderHistory, ...cartItems]);
        setCartItems([]);
    };

    // Calculate total price of items in the cart
    const getTotalPrice = () => {
        const total = cartItems.reduce((total, product) => total + product.price, 0);
        return total.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice, placeOrder, orderHistory }}>
            {children}
        </CartContext.Provider>
    );
};
