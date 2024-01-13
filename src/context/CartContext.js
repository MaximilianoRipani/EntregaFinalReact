import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload);
        
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeItem = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de CartProvider');
    }
    return context;
};

export { CartProvider, useCart, CartContext };
